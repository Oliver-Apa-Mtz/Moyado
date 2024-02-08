import './header.css';
import Logo from '../../assets/img/logo.svg';

const Header = () => {
	return (
		<div className="header w-screen absolute flex justify-center">
			<div className="flex p-4 px-12 text-white w-[1200px]">
				<div className="basis-1/6">
					<div className="header__logo h-12">
						<img className="h-full" src={Logo} alt="" />
					</div>
				</div>
				<div className="basis-4/6 h-12">
					<div className="header__nav h-full flex justify-center items-center gap-5">
						<div className="header__nav__item cursor-pointer">Home</div>
						<div className="header__nav__item cursor-pointer">¿Quiénes somos?</div>
						<div className="header__nav__item cursor-pointer">Beneficios</div>
						<div className="header__nav__item cursor-pointer">Alianzas estratégicas</div>
						<div className="header__nav__item cursor-pointer">Servicios</div>
						<div className="header__nav__item cursor-pointer">Contáctanos</div>
					</div>
				</div>
				<div className="basis-1/6 text-right h-12 flex justify-end">
					<div className="header__nav h-full flex justify-center items-center gap-5">
						<div className="header__nav__item cursor-pointer">33 3121 1681</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header