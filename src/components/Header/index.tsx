import './header.css';
import Logo from '../../assets/img/logo.svg';
import Icon from '../../assets/img/arrow-white.svg';

const Header = () => {
	return (
		<header className="header w-screen absolute flex justify-center">
			<div className="flex text-white items-center w-[1200px] pt-[25px]">
				<div className="basis-1/6">
					<div className="header__logo w-[290px]">
						<img className="h-full" src={Logo} alt="" />
					</div>
				</div>
				<div className="basis-4/6 h-12">
					<div className="header__nav h-full flex justify-center items-center gap-5 poppins-semibold text-sm">
						<div className="header__nav__item cursor-pointer flex items-center">
							Home
							<span className="header__nav__item__icon">
								<img src={Icon} alt="" />
							</span>
						</div>
						<div className="header__nav__item cursor-pointer flex items-center">
							¿Quiénes somos?
							<span className="header__nav__item__icon">
								<img src={Icon} alt="" />
							</span>
						</div>
						<div className="header__nav__item cursor-pointer flex items-center">
							Beneficios
							<span className="header__nav__item__icon">
								<img src={Icon} alt="" />
							</span>
						</div>
						<div className="header__nav__item cursor-pointer flex items-center">
							Alianzas estratégicas
							<span className="header__nav__item__icon">
								<img src={Icon} alt="" />
							</span>
						</div>
						<div className="header__nav__item cursor-pointer flex items-center">
							Servicios
							<span className="header__nav__item__icon">
								<img src={Icon} alt="" />
							</span>
						</div>
						<div className="header__nav__item cursor-pointer flex items-center">
							Contáctanos
							<span className="header__nav__item__icon">
								<img src={Icon} alt="" />
							</span>
						</div>
					</div>
				</div>
				<div className="basis-1/6 h-12 flex justify-end">
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