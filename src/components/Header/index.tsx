import './header.css';
import Logo from '../../assets/img/logo.svg';

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
						<div className="header__nav__item cursor-pointer">Home</div>
						<div className="header__nav__item cursor-pointer">¿Quiénes somos?</div>
						<div className="header__nav__item cursor-pointer">Beneficios</div>
						<div className="header__nav__item cursor-pointer">Alianzas estratégicas</div>
						<div className="header__nav__item cursor-pointer">Servicios</div>
						<div className="header__nav__item cursor-pointer">Contáctanos</div>
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