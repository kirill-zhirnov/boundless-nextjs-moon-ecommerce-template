import {IProduct} from 'boundless-api-client';
import {GetServerSideProps, InferGetServerSidePropsType} from 'next';
import ProductsList from '../components/ProductsList';
import MainLayout from '../layouts/Main';
import {apiClient} from '../lib/api';
import {makeAllMenus} from '../lib/menu';
import {IMenuItem} from '../@types/components';
import bgImg from '../assets/tools-background.jpg';
import bgPortraitImg from '../assets/cover-bg-portrait.jpg';
import CoverTextInCenter from '../components/CoverTextInCenter';
import ProductsSliderByQuery from '../components/ProductsSliderByQuery';

export default function IndexPage({products, mainMenu, footerMenu}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<MainLayout mainMenu={mainMenu} footerMenu={footerMenu} classes={{layoutMain: 'pt-0'}}>
			<CoverTextInCenter
				showChevronDown
				img={bgImg.src}
				imgPortrait={bgPortraitImg.src}
				content={{
					intro: 'Proveedoras Electricas',
					head: '¡Realiza el trabajo correctamente con nuestras herramientas!',
					subHead: 'Únete a nosotros'
				}}
				shadow={{
					opacity: 0.5,
					backgroundColor: '#000'
				}}
				link={'https://google.com'}
			/>
			<div className='container'>
				<h1 className='page-heading page-heading_h1  page-heading_m-h1'>Nuestros Productos</h1>
				<ProductsList products={products} query={{}}/>
				<h2 className='page-heading page-heading_h1  page-heading_m-h1'>Carrusel de productos:</h2>
				<ProductsSliderByQuery
					query={{collection: ['main-page'], sort: 'in_collection'}}
					wrapperClassName='page-block'
				/>
			</div>
		</MainLayout>
	);
}

export const getServerSideProps: GetServerSideProps<IIndexPageProps> = async () => {
	const categoryTree = await apiClient.catalog.getCategoryTree({menu: 'category'});
	const {products} = await apiClient.catalog.getProducts({collection: ['main-page'], sort: 'in_collection'});

	const menus = makeAllMenus({categoryTree});

	return {
		props: {
			products,
			...menus
		}
	};
};

interface IIndexPageProps {
	products: IProduct[];
	mainMenu: IMenuItem[];
	footerMenu: IMenuItem[];
}
