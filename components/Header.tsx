import {MouseEvent} from 'react';
import Link from 'next/link';
import HeaderCart from './cart/HeaderCart';
import ChooseVariantModal from './header/ChooseVariantModal';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {useAppDispatch} from '../hooks/redux';
import {setIsOpened} from '../redux/reducers/asideMenu';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons/faPhoneAlt';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons/faWhatsapp';

export default function Header() {
	const dispatch = useAppDispatch();

	const onHamburgerBtnClicked = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		dispatch(setIsOpened(true));
	};

	return (
		<header className='page-header'>
			<div className='page-header__phones-row'>
				<div className='container page-header__phones-container'>
					<div className='page-header__phones'>
						<a href={'tel:+1(123)1234567'} className='page-header__phone-link'>
							<FontAwesomeIcon icon={faPhoneAlt} /> +1 (123) 123-45-67
						</a>
						<a href={'https://api.whatsapp.com/send?phone=11231234567&text=Hello!'}
							 className='page-header__phone-link'
							 target={'_blank'}
						>
							<FontAwesomeIcon icon={faWhatsapp} /> +1 (123) 123-45-67
						</a>
					</div>
					<ul className='page-header__menu list-unstyled'>
						<li>
							<a href={'/shipping'} className='page-header__phone-link'>Shipping</a>
						</li>
						<li>
							<a href={'/about'} className='page-header__phone-link'>About</a>
						</li>
					</ul>
				</div>
			</div>
			<div className={'page-header__logo-row'}>
				<div className='container page-header__logo-container'>
					<div className={'page-header__logo-wrapper'}>
						<Link href='/'>
							<a className={'page-header__logo-link'}>
								<span>THE MOON</span>
							</a>
						</Link>
					</div>
					<div className={'page-header__right-blocks'}>
						<HeaderCart className={'page-header__moon-cart'} />
						<button type={'button'}
										className={'btn btn-outline-secondary page-header__hamburger-btn'}
										onClick={onHamburgerBtnClicked}
						>
							<FontAwesomeIcon icon={faBars} />
						</button>
					</div>
				</div>
			</div>
			<ChooseVariantModal />
		</header>
	);
}
