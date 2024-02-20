import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

import './header.css';
import Logo from '../../assets/img/logo.svg';
import Icon from '../../assets/img/arrow-white.svg';

const Header = () => {
	const [isHeaderFixed, setIsHeaderFixed] = useState(false);

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
			<div className={`flex text-white justify-between items-center w-[1300px] ${isHeaderFixed ? '' : 'pt-[25px]'}`}>
				<div className="mr-4">
					<Link
						activeClass="active"
						to="home"
						spy={true}
						smooth={true}
						offset={0}
						duration={500}
						className="header__logo w-[290px] cursor-pointer">
						<img className="h-full" src={Logo} alt="logo MOYADO" />
					</Link>
				</div>
				<div className="h-12">
					<div className="header__nav h-full flex justify-center items-center gap-5 poppins-semibold text-sm">
						<Link
							activeClass="active"
							to="home"
							spy={true}
							smooth={true}
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
				<div className="h-12 flex justify-end ml-4">
					<div className="header__phones h-full poppins-semibold text-sm">
						<div className="header__nav__item cursor-pointer">33 3121 1681</div>
						<div className="header__nav__item cursor-pointer">33 3334 7543</div>
						<div className="header__nav__item cursor-pointer">33 3335 4012</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header