import {MouseEvent} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeaderCart from './cart/HeaderCart';
import ChooseVariantModal from './header/ChooseVariantModal';
import { contactInfo, CONTACT } from '../definations/contactInfo';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import {setIsOpened} from '../redux/reducers/asideMenu';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons/faPhoneAlt';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import {RootState} from '../redux/store';
import clsx from 'clsx';
import peLogo from '../assets/pe-logo.png';
import { logoData } from '../definations/ui';

export default function Header() {
	const dispatch = useAppDispatch();
	const asideIsOpened = useAppSelector((state: RootState) => state.asideMenu.isOpened);
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
							<FontAwesomeIcon icon={faPhoneAlt} /> {CONTACT}
						</a>
						<a href={contactInfo.whatsAppLink}
							 className='page-header__phone-link'
							 target={'_blank'}
						>
							<FontAwesomeIcon icon={faWhatsapp} /> {CONTACT}
						</a>
					</div>
					<ul className='page-header__menu list-unstyled'>
						<li>
							<Link href={'/shipping'}>
								<a className='page-header__phone-link'>Shipping</a>
							</Link>
						</li>
						<li>
							<Link href={'/about'}>
								<a className='page-header__phone-link'>About</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className={'page-header__logo-row'}>
				<div className='container page-header__logo-container'>
					<div className={'page-header__logo-wrapper'}>
						<Link href='/'>
							<a className={'page-header__logo-link'}>
                <Image src={peLogo} width={logoData.width} height={logoData.height} />
							</a>
						</Link>
					</div>
					<div className={'page-header__right-blocks'}>
						<HeaderCart className={'page-header__moon-cart'} />
						<button type={'button'}
										className={'hamburger-btn page-header__hamburger'}
										onClick={onHamburgerBtnClicked}
						>
							<span className={clsx('hamburger-btn__bar', {'first-opened': asideIsOpened})} />
							<span className={clsx('hamburger-btn__bar', {'middle-opened': asideIsOpened})} />
							<span className={clsx('hamburger-btn__bar', {'last-opened': asideIsOpened})} />
						</button>
					</div>
				</div>
			</div>
			<ChooseVariantModal />
		</header>
	);
}
