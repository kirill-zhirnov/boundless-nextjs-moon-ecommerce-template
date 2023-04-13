import {faWhatsapp} from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import {faClock} from '@fortawesome/free-solid-svg-icons/faClock';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { ADDRESS, CONTACT, contactInfo } from '../../definations/contactInfo';
import { schedule } from '../../definations/jobInfo';

export default function FooterContacts() {
	return (
		<>
			<h3 className='page-footer__header'>Contáctanos</h3>
			<p className='page-footer__icon-w-link'>
				<span className='icon'>
					<FontAwesomeIcon icon={faWhatsapp} />
				</span>
				<a className='link' href='tel:+18001234567'>{CONTACT}</a>
			</p>
			<p className='page-footer__icon-w-link'>
				<span className='icon'>
					<FontAwesomeIcon icon={faMapMarkerAlt} />
				</span>
				<a className='link' target="_blank" href={contactInfo.addressLink}>{ADDRESS}</a>
			</p>
			<p className='page-footer__icon-w-link'>
				<span className='icon'>
					<FontAwesomeIcon icon={faClock} />
				</span>
        {schedule.openHours}
			</p>
		</>
	);
}
