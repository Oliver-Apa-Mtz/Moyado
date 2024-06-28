import { Link } from 'react-router-dom';
import './footer.css';

import Logo from '../../assets/img/logo-footer.webp';
import IconMarker from '../../assets/img/marker.svg';
import IconPhone from '../../assets/img/phone.svg';
import LogoDesarrollo from '../../assets/img/logo-dinno.webp';

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
							<Link to="/">
								<img src={Logo} alt="Moyado" />
							</Link>
						</div>
						<div className="footer__nav">
							<a href="https://maps.app.goo.gl/D4QNjjAM3Q2FPMBr8" className="footer__nav__item cursor-pointer flex mb-10 sm:mb-8 hover:text-[#e3141d]" target="_blank">
								<span className='mr-6'>
									<img className="w-[43px]" src={IconMarker} alt="" />
								</span>
								Av. Hidalgo No. 3210, Vallarta San Jorge.
								CP. 44690. Guadalajara, Jalisco
							</a>
							<div className="footer__nav__item cursor-pointer flex mb-14 sm:mb-8">
								<span className='mr-6'>
									<img src={IconPhone} alt="" />
								</span>
								<a className="hover:text-[#e3141d]" href="tel:+523331211681">(33) 3121 1681</a>
								<span className='mx-2'> | </span>
								<a className="hover:text-[#e3141d]" href="tel:+523333347543">3334 7543</a>
								<span className='mx-2'> | </span>
								<a className="hover:text-[#e3141d]" href="tel:+523333354012">3335 4012</a>
							</div>
						</div>
						<div className='footer__social flex pl-14'>
							<div className='mr-6'>
								<a href="https://www.facebook.com/share/8crd932sjAUEBZ1Y/?mibextid=LQQJ4d" target="_blank">
									<svg width="14.0009168px" height="34.0004253px" viewBox="0 0 14.0009168 34.0004253" version="1.1" xmlns="http://www.w3.org/2000/svg">
										<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
											<g id="face-icon" transform="translate(-687.5633, -6869.1164)" fill="#FFFFFF">
												<g id="Group-9" transform="translate(634.5642, 6522.2662)">
													<g id="Group-8" transform="translate(53, 346.8506)">
														<path d="M14,0.0224036671 L9.63984022,0.0224036671 C9.63984022,0.0224036671 2.81906882,-0.791920928 2.81906882,7.30651769 L2.81906882,10.6631715 L0.0449217471,10.6631715 L-0.000916770349,17.0375018 L2.81906882,17.0375018 L2.81906882,34 L9.28413332,34 L9.28413332,17.0375018 L13.0190557,17.0375018 L13.9284919,10.6631715 L9.28413332,10.6631715 L9.28413332,8.07213866 C9.28413332,8.07213866 8.88625499,5.88047558 11.185515,5.88047558 L13.955995,5.88047558 L14,0.0224036671 Z" id="Fill-6"></path>
													</g>
												</g>
											</g>
										</g>
									</svg>
								</a>
							</div>
							{/* 
							<div className='mr-6'>
								<a href="https://www.facebook.com/profile.php?id=100068096490103" target="_blank">
									<svg width="34px" height="34px" viewBox="0 0 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg">
										<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
											<g id="ig-icon" transform="translate(-728.0642, -6869.1168)" fill="#FFFFFF">
												<g id="Group-9" transform="translate(634.5642, 6522.2662)">
													<g id="Redes-sociales" transform="translate(53, 346.8506)">
														<g id="Group-11" transform="translate(40.5, 0)">
															<path d="M26.1914468,5.49272323 C25.1210191,5.49272323 24.2547771,6.40025421 24.2547771,7.52170321 C24.2547771,8.64315221 25.1210191,9.55068319 26.1914468,9.55068319 C27.2618744,9.55068319 28.1281165,8.64315221 28.1281165,7.52170321 C28.1281165,6.40025421 27.2618744,5.49272323 26.1914468,5.49272323 L26.1914468,5.49272323 Z M17.0010312,9.66304417 C13.1380042,9.66304417 9.99684562,12.9539244 9.99684562,17.0010804 C9.99684562,21.0460756 13.1380042,24.3369558 17.0010312,24.3369558 C20.8619958,24.3369558 24.0031544,21.0460756 24.0031544,17.0010804 C24.0031544,12.9539244 20.8619958,9.66304417 17.0010312,9.66304417 L17.0010312,9.66304417 Z M17.0010312,26.7786463 C11.8530786,26.7786463 7.66624204,22.3922466 7.66624204,17.0010804 C7.66624204,11.6077534 11.8530786,7.22135367 17.0010312,7.22135367 C22.1469214,7.22135367 26.333758,11.6077534 26.333758,17.0010804 C26.333758,22.3922466 22.1469214,26.7786463 17.0010312,26.7786463 L17.0010312,26.7786463 Z M10.4856536,2.4416905 C5.98944495,2.4416905 2.33060358,6.2749285 2.33060358,10.9854465 L2.33060358,23.0123928 C2.33060358,27.7250715 5.98944495,31.5583095 10.4856536,31.5583095 L23.5143464,31.5583095 C28.0105551,31.5583095 31.6693964,27.7250715 31.6693964,23.0123928 L31.6693964,10.9854465 C31.6693964,6.2749285 28.0105551,2.4416905 23.5143464,2.4416905 L10.4856536,2.4416905 Z M23.5143464,34 L10.4856536,34 C4.70451926,34 0,29.0712425 0,23.0123928 L0,10.9854465 C0,4.92875755 4.70451926,0 10.4856536,0 L23.5143464,0 C29.2954807,0 34,4.92875755 34,10.9854465 L34,23.0123928 C34,29.0712425 29.2954807,34 23.5143464,34 L23.5143464,34 Z" id="Fill-9"></path>
														</g>
													</g>
												</g>
											</g>
										</g>
									</svg>
								</a>
							</div>
							*/}
							<div className='mr-6'>
								<a href="https://x.com/moyado_a?s=11&t=QFZ9WFKngQgcPPsxYxtwqA" target="_blank">
									<svg width="33px" height="34px" viewBox="0 0 33 34" version="1.1" xmlns="http://www.w3.org/2000/svg">
										<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
											<g id="x-icon" transform="translate(-784.5642, -6869.1168)" fill="#FFFFFF">
												<g id="Group-9" transform="translate(634.5642, 6522.2662)">
													<g id="Redes-sociales" transform="translate(53, 346.8506)">
														<path d="M126.025767,0 L123.625443,2.79812601 L115.322203,12.5286344 L107.412711,0.958842039 L106.757168,0 L97.0379747,0 L99.408297,3.46820502 L109.92496,18.8533389 L97,34 L99.8040174,34 L111.175125,20.6805398 L119.625235,33.0421649 L120.280751,34 L130,34 L127.62965,30.531795 L116.572341,14.3578211 L128.829812,0 L126.025767,0 Z M112.159045,19.4062324 L110.939293,17.613443 L101,3 L105.275448,3 L113.313476,14.8182352 L114.533228,16.6110246 L125,32 L120.724579,32 L112.159045,19.4062324 Z" id="Fill-1"></path>
													</g>
												</g>
											</g>
										</g>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="sm:flex text-white w-[1200px] justify-between items-end mx-auto mt-20 sm:mt-20">
				<div className="basis-1/2 text-center sm:text-left">
					<Link to="/aviso-de-privacidad" className="cursor-pointer hover:text-[#e3141d]">
						Aviso de Privacidad
					</Link>
				</div>
				<div className="basis-1/2 text-center sm:text-right">
					<p>Sitio creado por Erredesign 2023.</p>
					<a href="https://www.dinno.com.mx/" className='logo-desarrollo hover:text-[#e3141d]' target="_blank">
						<p>Desarrollado por:</p>
						<img className='logo-desarrollo__icon' src={LogoDesarrollo} alt="Agencia Dinno" />
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer;