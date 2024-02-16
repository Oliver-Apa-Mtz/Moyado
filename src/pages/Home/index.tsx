
import './home.css';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
import Form from '../../components/Form';

import Banner from '../../assets/img/banner.png';
import Banner1 from '../../assets/img/banner-1-white.png';
import Banner2 from '../../assets/img/banner-2-white.png';
import Banner3 from '../../assets/img/banner-2.png';

import Icon1 from '../../assets/img/icon-1.svg';
import Icon2 from '../../assets/img/icon-2.svg';
import Icon3 from '../../assets/img/icon-3.svg';
import Icon4 from '../../assets/img/icon-4.svg';
import Icon5 from '../../assets/img/arrow.svg'

import Service1 from '../../assets/img/service-1.jpeg';
import Service2 from '../../assets/img/service-2.jpeg';
import Service3 from '../../assets/img/service-3.jpeg';
import Service4 from '../../assets/img/service-4.jpeg';
import Service5 from '../../assets/img/service-5.jpeg';
import Service6 from '../../assets/img/service-6.jpeg';

const Home = () => {

	return (
		<Layout>
			{
				<div>
					<div className="banner-ppal w-screen h-[850px]" style={{ backgroundImage: `url(${Banner})`, backgroundPosition: 'center bottom' }}>
						<div className="banner__container w-full h-full flex items-center gap-4">
							<div className="banner__text w-full">
								<h1 className="text-white text-2xl mb-4 poppins-extrabold">
									Descubre el camino hacia el éxito financiero de tu empresa
								</h1>
								<p className="text-white mb-4 text-base roboto-regular">
									Somos tu despacho contable de confianza en Guadalajara.
								</p>
							</div>
						</div>
					</div>

					<div className="banner-ppal banner-ppal--second w-screen h-[1100px]" style={{ backgroundImage: `url(${Banner2})`, backgroundPosition: 'center top' }}>
						<div className="banner__container w-full h-full flex items-center gap-4">
							<div className="w-[835px] pt-20">
								<h3 className="text-3xl poppins-extrabold mb-4 efect-line--custom">
									¡Transformamos números <br></br>en oportunidades!
								</h3>
								<p className="mb-8 text-base roboto-regular">
									Somos más que un despacho contable en Guadalajara; somos
									tus aliados estratégicos en el camino hacia el éxito financiero.
								</p>
								<p className="mb-4 text-base roboto-regular">
									Nuestra misión es brindar atención personalizada y la más alta
									calidad en servicios contables, auditoría, tributarios, asesoría
									y consultoría legal. Con profesionales experimentados y certificados,
									estamos aquí para impulsar el crecimiento de tu empresa.
								</p>
							</div>
						</div>
					</div>

					<div className="services">
						<div className="text-center w-full flex justify-center">
							<h3 className="text-3xl poppins-extrabold mb-20 w-[600px]">
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

					<div className="banner-ppal banner-ppal--three w-screen h-[1100px] z-[-1]" style={{ backgroundImage: `url(${Banner1})` }}>
						<div className="banner__container w-full h-full flex items-center gap-4">
							<div className="w-[700px] pt-20 text-center">
								<h3 className="text-2xl poppins-extrabold mb-4 text-red">
									Déjanos ser tu socio de confianza y descubre cómo podemos potenciar tu éxito financiero
								</h3>
								<img className='mx-auto mt-10' src={Icon5} alt="" />
							</div>
						</div>
					</div>

					<div className="banner-gray">
						<div className="banner__container w-full h-full pt-[350px]">
							<div className="w-[1200px] text-center mb-10">
								<p className="text-xl roboto-regular relative">
									En <b>Moyado | Auditores & Consultores</b>, entendemos la importancia de la colaboración.
									Contamos con alianzas estratégicas con profesionales en diversas áreas, incluyendo
									notarios, abogados fiscalistas, especialistas en estudios de mercado, y más.
								</p>
							</div>
							<div className="w-[800px] text-center m-[auto]">
								<p className="text-xl roboto-regular relative">
									¡Estas alianzas nos permiten ofrecer servicios integrales
									que crean ventajas competitivas para tu empresa!
								</p>
							</div>
						</div>
					</div>

					<div className="w-screen h-auto relative z-20 pt-[300px] mb-20">
						<div className="banner__container w-full h-full flex items-center justify-center flex-wrap">
							<div className="w-[990px] text-center">
								<h3 className="text-2xl poppins-extrabold mb-12">
									Impulsar el crecimiento y la estabilidad de tu empresa con nuestros servicios especializados:
								</h3>
							</div>
							<div className="w-full flex flex-row mb-12">
								<div className="basis-1/3">
									<div className="service-item flex justify-center items-center" style={{ backgroundImage: `url(${Service1})` }}>
										<h5 className='poppins-bold text-white text-[35px]'>Auditoría de Estados Financieros</h5>
										<p className='roboto-regular text-[28px] text-white'>
											Emisión de opiniones profesionales e independientes para garantizar
											la confianza de accionistas e instituciones financieras.
										</p>
									</div>
								</div>
								<div className="basis-1/3">
									<div className="service-item flex justify-center items-center" style={{ backgroundImage: `url(${Service2})` }}>
										<h5 className='poppins-bold text-white text-[35px]'>Auditoría de Cumplimiento de Obligaciones (Preventivas)</h5>
										<p className='roboto-regular text-[28px] text-white'>
											Verificación precisa del cumplimiento de obligaciones fiscales
											para prevenir contingencias.
										</p>
									</div>
								</div>
								<div className="basis-1/3">
									<div className="service-item flex justify-center items-center" style={{ backgroundImage: `url(${Service3})` }}>
										<h5 className='poppins-bold text-white text-[35px]'>Proyectos de Regularización Contable</h5>
										<p className='roboto-regular text-[28px] text-white'>
											Optimización de cuentas para reflejar el valor real
											de los elementos patrimoniales.
										</p>
									</div>
								</div>
							</div>
							<div className="w-full flex flex-row">
								<div className="basis-1/3">
									<div className="service-item flex justify-center items-center" style={{ backgroundImage: `url(${Service4})` }}>
										<h5 className='poppins-bold text-white text-[35px]'>Auditoría Operacional</h5>
										<p className='roboto-regular text-[28px] text-white'>
											Identificación de áreas de oportunidad, reducción de costos
											y mejora de procesos para un rendimiento óptimo.
										</p>
									</div>
								</div>
								<div className="basis-1/3">
									<div className="service-item flex justify-center items-center" style={{ backgroundImage: `url(${Service5})` }}>
										<h5 className='poppins-bold text-white text-[35px]'>Auditoría de IMSS e Infonavit</h5>
										<p className='roboto-regular text-[28px] text-white'>
											Garantía de la correcta integración de cuotas y asesoría
											integral en nóminas y contratos laborales.
										</p>
									</div>
								</div>
								<div className="basis-1/3">
									<div className="service-item flex justify-center items-center" style={{ backgroundImage: `url(${Service6})` }}>
										<h5 className='poppins-bold text-white text-[35px]'>Asesoría y Consultoría Contable-Fiscal</h5>
										<p className='roboto-regular text-[28px] text-white'>
											Evita riesgos fiscales con una ejecución contable-fiscal
											precisa y bien planificada.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="banner-ppal w-screen h-[1100px] relative z-22" style={{ backgroundImage: `url(${Banner3})` }}>
						<div className="banner__container w-full h-full">
							<div className="text-white relative text-center pt-[270px] mb-[80px]">
								<h3 className="text-4xl poppins-extrabold mb-6">
									¡Tu éxito comienza aquí!
								</h3>
								<p className='roboto-regular text-xl'>
									Compártenos tus datos y te contactaremos para resolver tus dudas.
								</p>
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