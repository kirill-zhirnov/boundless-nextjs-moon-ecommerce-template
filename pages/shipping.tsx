import {IMenuItem} from '../@types/components';
import MainLayout from '../layouts/Main';
import {GetServerSideProps} from 'next';
import {apiClient} from '../lib/api';
import {makeAllMenus} from '../lib/menu';
import {IBasicSettings} from '../@types/settings';

export default function ShippingPage({mainMenu, footerMenu, basicSettings}: IShippingPageProps) {
	return (
		<MainLayout
			mainMenu={mainMenu}
			footerMenu={footerMenu}
			basicSettings={basicSettings}
		>
			<div className='container'>
				<h1 className='page-heading page-heading_h1  page-heading_m-h1'>Shipping</h1>
				<h2>What is Lorem Ipsum?</h2>
				<p>
					Lorem <a href={'#'}>Ipsum is simply</a> dummy text of the printing and typesetting industry.
					Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
					took a galley of type and scrambled it to make a type specimen book. It has survived not only five
					centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
					popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
					recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
				</p>
			</div>
		</MainLayout>
	);
}

export const getServerSideProps: GetServerSideProps<IShippingPageProps> = async () => {
	const categoryTree = await apiClient.catalog.getCategoryTree({menu: 'category'});
	const {mainMenu, footerMenu} = makeAllMenus({categoryTree});
	const basicSettings = await apiClient.system.fetchSettings(['system.locale', 'system.currency']) as IBasicSettings;

	return {
		props: {
			mainMenu,
			footerMenu,
			basicSettings
		}
	};
};

interface IShippingPageProps {
	mainMenu: IMenuItem[];
	footerMenu: IMenuItem[];
	basicSettings: IBasicSettings;
}