import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { IoMenuSharp, IoClose } from 'react-icons/io5';

import './header.css';
import Logo from '../../assets/img/logo.svg';
import Icon from '../../assets/img/arrow-white.svg';

const Header = () => {
	const [isHeaderFixed, setIsHeaderFixed] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		const headerHeight = 100;
		setIsHeaderFixed(scrollPosition > headerHeight);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header className={`header w-screen flex justify-center ${isHeaderFixed ? 'fixed' : 'absolute'}`}>
			<div className={`flex text-white justify-between items-center w-full max-w-[1300px] px-[20px] ${isHeaderFixed ? '' : 'pt-[25px]'}`}>
				<div className="mr-4">
					<Link
						activeClass="active"
						to="home"
						spy={true}
						smooth={true}
						href="home"
						offset={0}
						duration={500}
						className="header__logo cursor-pointer">
						<img src={Logo} alt="logo MOYADO" />
					</Link>
				</div>
				<div className="h-12">
					<div className="header__nav h-full flex justify-center items-center md:gap-3 xl:gap-5 poppins-semibold text-sm">
						<Link
							activeClass="active"
							to="home"
							spy={true}
							smooth={true}
							href="home"
							offset={0}
							duration={500}
							className="header__nav__item cursor-pointer flex items-center">
							Home
							<span className="header__nav__item__icon">
								<img src={Icon} alt="" />
							</span>
						</Link>
						<Link
							activeClass="active"
							to="about"
							spy={true}
							smooth={true}
							href="about"
							offset={200}
							duration={500}
							className="header__nav__item cursor-pointer flex items-center">
							¿Quiénes somos?
							<span className="header__nav__item__icon">
								<img src={Icon} alt="" />
							</span>
						</Link>
						<Link
							activeClass="active"
							to="benefits"
							spy={true}
							smooth={true}
							href="benefits"
							offset={-150}
							duration={500}
							className="header__nav__item cursor-pointer flex items-center">
							Beneficios
							<span className="header__nav__item__icon">
								<img src={Icon} alt="" />
							</span>
						</Link>
						<Link
							activeClass="active"
							to="alianzas"
							spy={true}
							smooth={true}
							href="alianzas"
							offset={350}
							duration={500}
							className="header__nav__item cursor-pointer flex items-center">
							Alianzas estratégicas
							<span className="header__nav__item__icon">
								<img src={Icon} alt="" />
							</span>
						</Link>
						<Link
							activeClass="active"
							to="services"
							spy={true}
							smooth={true}
							href="services"
							offset={120}
							duration={500}
							className="header__nav__item cursor-pointer flex items-center">
							Servicios
							<span className="header__nav__item__icon">
								<img src={Icon} alt="" />
							</span>
						</Link>
						<Link
							activeClass="active"
							to="contact"
							spy={true}
							smooth={true}
							href="contact"
							offset={100}
							duration={500}
							className="header__nav__item cursor-pointer flex items-center">
							Contáctanos
							<span className="header__nav__item__icon">
								<img src={Icon} alt="" />
							</span>
						</Link>
					</div>
				</div>
				<div className="flex justify-end ml-4 h-full items-center">
					<div className="header__phones h-full poppins-semibold text-sm">
						<a href="tel:+523331211681" className={`block header__nav__item cursor-pointer ${isHeaderFixed ? 'hover:text-[#e3141d]' : 'hover:text-black'}`}>33 3121 1681</a>
						<a href="tel:+523333347543" className={`block header__nav__item cursor-pointer ${isHeaderFixed ? 'hover:text-[#e3141d]' : 'hover:text-black'}`}>3334 7543</a>
						<a href="tel:+523333354012" className={`block header__nav__item cursor-pointer ${isHeaderFixed ? 'hover:text-[#e3141d]' : 'hover:text-black'}`}>3335 4012</a>
					</div>
				</div>
				<div className="header__icon-menu text-3xl cursor-pointer">
					{!isMenuOpen && (
						<IoMenuSharp onClick={() => setIsMenuOpen(true)} className="text-white" />
					)}
					{isMenuOpen && (
						<IoClose onClick={() => setIsMenuOpen(false)} className="text-white" />
					)}
				</div>
			</div>
			{isMenuOpen && (
				<div className="header__nav__movil">
					<Link
						activeClass="active"
						to="home"
						spy={true}
						smooth={true}
						href="home"
						offset={0}
						duration={500}
						className="header__nav__movil__item cursor-pointer"
						onClick={() => setIsMenuOpen(false)}>
						Home
					</Link>
					<Link
						activeClass="active"
						to="about"
						spy={true}
						smooth={true}
						href="about"
						offset={200}
						duration={500}
						className="header__nav__movil__item cursor-pointer"
						onClick={() => setIsMenuOpen(false)}>
						¿Quiénes somos?
					</Link>
					<Link
						activeClass="active"
						to="benefits"
						spy={true}
						smooth={true}
						href="benefits"
						offset={-150}
						duration={500}
						className="header__nav__movil__item cursor-pointer"
						onClick={() => setIsMenuOpen(false)}>
						Beneficios
					</Link>
					<Link
						activeClass="active"
						to="alianzas"
						spy={true}
						smooth={true}
						href="alianzas"
						offset={350}
						duration={500}
						className="header__nav__movil__item cursor-pointer"
						onClick={() => setIsMenuOpen(false)}>
						Alianzas estratégicas
					</Link>
					<Link
						activeClass="active"
						to="services"
						spy={true}
						smooth={true}
						href="services"
						offset={120}
						duration={500}
						className="header__nav__movil__item cursor-pointer"
						onClick={() => setIsMenuOpen(false)}>
						Servicios
					</Link>
					<Link
						activeClass="active"
						to="contact"
						spy={true}
						smooth={true}
						href="contact"
						offset={100}
						duration={500}
						className="header__nav__movil__item cursor-pointer"
						onClick={() => setIsMenuOpen(false)}>
						Contáctanos
					</Link>
				</div>
			)}
		</header>
	)
}

export default Header