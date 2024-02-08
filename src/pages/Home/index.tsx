
import './home.css';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
import Form from '../../components/Form';

import Banner from '../../assets/img/banner.png';
import Banner2 from '../../assets/img/banner-2-white.png';

import Icon1 from '../../assets/img/icon-1.svg';
import Icon2 from '../../assets/img/icon-2.svg';
import Icon3 from '../../assets/img/icon-3.svg';
import Icon4 from '../../assets/img/icon-4.svg';

const Home = () => {

	return (
		<Layout>
			{
				<div>
					<div className="banner-ppal w-screen h-screen min-h-[725px]" style={{ backgroundImage: `url(${Banner})` }}>
						<div className="banner__container w-full h-full flex items-center gap-4">
							<div className="banner__text w-full">
								<h1 className="text-white text-2xl font-bold mb-4">
									Descubre el camino hacia el éxito financiero de tu empresa
								</h1>
								<p className="text-white mb-4 text-base">
									Somos tu despacho contable de confianza en Guadalajara.
								</p>
							</div>
						</div>
					</div>

					<div className="banner-ppal banner-ppal--second w-screen h-[1100px]" style={{ backgroundImage: `url(${Banner2})` }}>
						<div className="banner__container w-full h-full flex items-center gap-4">
							<div className="banner__text w-[845px] pt-20">
								<h3 className="text-3xl font-bold mb-4 efect-line--custom">
									¡Transformamos números en oportunidades!
								</h3>
								<p className="mb-8 text-base">
									Somos más que un despacho contable en Guadalajara; somos
									tus aliados estratégicos en el camino hacia el éxito financiero.
								</p>
								<p className="mb-4 text-base">
									Nuestra misión es brindar atención personalizada y la más alta
									calidad en servicios contables, auditoría, tributarios, asesoría
									y consultoría legal. Con profesionales experimentados y certificados,
									estamos aquí para impulsar el crecimiento de tu empresa.
								</p>
							</div>
							<div className="banner__img basis-1/2 flex justify-center items-center"></div>
						</div>
					</div>

					<div className="services">
						<div className="text-center w-full flex justify-center">
							<h3 className="text-3xl font-bold mb-20 w-[600px]">
								¿Por qué elegir  Moyado | Auditores & Consultores?
							</h3>
						</div>
						<div className="banner__container flex gap-6 flex-wrap justify-center w-[800px]">
							<Card
								image={Icon1}
								text={'<p><b>Atención personalizada</b> y dedicada a cada cliente.</p>'}
							/>
							<Card
								image={Icon2}
								text={'<p><b>Calidad</b> y capacidad de respuesta excepcionales.</p>'}
							/>
							<Card
								image={Icon3}
								text={'<p>Miembro de prestigiosas <b>instituciones contables</b> a nivel estatal y nacional.</p>'}
							/>
							<Card
								image={Icon4}
								text={'<p><b>Alianzas estratégicas</b> que amplían nuestros servicios para tu beneficio.</p>'}
							/>
						</div>
					</div>

					<div className="banner-ppal w-screen banner-ppal--efecto--top h-screen min-h-[1000px] pt-[300px]" style={{ backgroundImage: `url(${Banner})` }}>
						<div className="banner__container w-full h-full">
							<div className="banner-text--large text-white relative text-center">
								<h3 className="text-3xl font-bold mb-4 efect-line efect-line--white">Champions offers a unique platform that allows its users to be smarter, faster.</h3>
								<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim atque deserunt porro placeat impedit non omnis quos? Dicta magni illum nostrum, amet itaque natus magnam eligendi expedita a! Quis, voluptatum?</p>
							</div>
							<Form />
						</div>
					</div>

				</div>
			}
		</Layout>
	)
}

export default Home