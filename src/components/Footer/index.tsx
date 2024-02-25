import './footer.css';

import Logo from '../../assets/img/logo-footer.png';
import IconMarker from '../../assets/img/marker.svg';
import IconPhone from '../../assets/img/phone.svg';
import IconFacebook from '../../assets/img/facebook.svg';
import IconInstagram from '../../assets/img/instagram.svg';
import IconX from '../../assets/img/x.svg';

const Footer = () => {
	return (
		<footer className="footer w-screen min-h-[600px] flex flex-wrap">
			<div className="flex text-white w-[1200px] mx-auto">
				<div className="hidden lg:block basis-2/6">
					<div></div>
				</div>
				<div className="lg:basis-4/6 lg:pl-20">
					<div className="roboto-regular text-[20px] sm:text-xl">
						<div className="footer__logo cursor-pointer mb-14">
							<img src={Logo} alt="" />
						</div>
						<div className="footer__nav">
							<div className="footer__nav__item cursor-pointer flex mb-10 sm:mb-8">
								<span className='mr-6'>
									<img className="w-[43px]" src={IconMarker} alt="" />
								</span>
								Av. Hidalgo No. 3210, Vallarta San Jorge.
								CP. 44690. Guadalajara, Jalisco
							</div>
							<div className="footer__nav__item cursor-pointer flex mb-14 sm:mb-8">
								<span className='mr-6'>
									<img src={IconPhone} alt="" />
								</span>
								(33) 3121 1681 | 3334 7543 | 3335 4012
							</div>
						</div>
						<div className='footer__social flex pl-14'>
							<div className='mr-6'>
								<a href="#">
									<img src={IconFacebook} alt="" />
								</a>
							</div>
							<div className='mr-6'>
								<a href="#">
									<img src={IconInstagram} alt="" />
								</a>
							</div>
							<div className='mr-6'>
								<a href="#">
									<img src={IconX} alt="" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="sm:flex text-white w-[1200px] justify-between items-end mx-auto mt-20 sm:mt-0">
				<div className="basis-1/2 text-center sm:text-left">
					<p>Aviso de Privacidad</p>
				</div>
				<div className="basis-1/2 text-center sm:text-right">
					<p>Sitio creado por Erredesignn 2023.</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer;