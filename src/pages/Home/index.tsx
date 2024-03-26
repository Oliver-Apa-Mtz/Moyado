import './home.css';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
import Form from '../../components/Form';

import Banner from '../../assets/img/banner.webp';
import Banner1 from '../../assets/img/banner-1-white.webp';
import Banner2 from '../../assets/img/banner-2-white.webp';
import Banner3 from '../../assets/img/banner-2.webp';

import Effect1 from '../../assets/img/effect-1.webp';
import Effect2 from '../../assets/img/effect-2.webp';
import Effect3 from '../../assets/img/effect-3.webp';
import Effect4 from '../../assets/img/effect-4.webp';

import Icon1 from '../../assets/img/icon-1.svg';
import Icon2 from '../../assets/img/icon-2.svg';
import Icon3 from '../../assets/img/icon-3.svg';
import Icon4 from '../../assets/img/icon-4.svg';
import Icon5 from '../../assets/img/arrow.svg'

import Service1 from '../../assets/img/service-1.webp';
import Service2 from '../../assets/img/service-2.webp';
import Service3 from '../../assets/img/service-3.webp';
import Service4 from '../../assets/img/service-4.webp';
import Service5 from '../../assets/img/service-5.webp';
import Service6 from '../../assets/img/service-6.webp';

const Home = () => {

	return (
		<Layout>
			{
				<div>
					<div id="home" className="banner-ppal w-screen h-[850px]" style={{ backgroundImage: `url(${Banner})`, backgroundPosition: 'center bottom' }}>
						<div className="banner__container w-full h-full flex items-center gap-4">
							<div className="banner__text w-full">
								<h1 className="text-white text-xl sm:text-2xl mb-10 sm:mb-4 poppins-extrabold">
									Descubre el camino hacia el éxito financiero de tu empresa
								</h1>
								<p className="text-white mb-4 text-[20px] sm:text-base roboto-regular">
									Somos tu despacho contable de confianza en Guadalajara.
								</p>
							</div>
						</div>
					</div>

					<div id="about" className="banner-ppal banner-ppal--second w-screen h-[1100px]" style={{ backgroundImage: `url(${Banner2})`, backgroundPosition: 'center top' }}>
						<div className="banner__container w-full h-full flex items-center gap-4">
							<div className="w-[835px] lg:pt-20 md:pt-0">
								<h2 className="text-xl sm:text-3xl poppins-extrabold mb-4 efect-line--custom">
									¡Transformamos números <br></br>en oportunidades!
								</h2>
								<p className="mb-8 text-[20px] sm:text-base roboto-regular">
									Somos más que un despacho contable en Guadalajara; somos
									tus aliados estratégicos en el camino hacia el éxito financiero.
								</p>
								<p className="mb-4 text-[20px] sm:text-base roboto-regular">
									Nuestra misión es brindar atención personalizada y la más alta
									calidad en servicios contables, auditoría, tributarios, asesoría
									y consultoría legal. Con profesionales experimentados y certificados,
									estamos aquí para impulsar el crecimiento de tu empresa.
								</p>
							</div>
						</div>
						<img className='effect-1' src={Effect1} alt="Somos más que un despacho contable en Guadalajara" />
						<img className='effect-2' src={Effect2} alt="Somos tus aliados estratégicos en el camino hacia el éxito financiero" />
					</div>

					<div id="benefits" className="services">
						<div className="text-center w-full flex justify-center">
							<h3 className="text-xl sm:text-3xl poppins-extrabold mb-20 w-full max-w-[640px] lg:pt-20 px-[20px]">
								¿Por qué elegir  Moyado Auditores & Consultores?
							</h3>
						</div>
						<div className="flex gap-6 flex-wrap justify-center w-full max-w-[800px] px-10 md:px-0 mx-auto">
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

					<div id="alianzas" className="banner-ppal banner-ppal--three w-screen h-[700px] sm:h-[1100px] z-[-1]" style={{ backgroundImage: `url(${Banner1})` }}>
						<img className='effect-3' src={Effect1} alt="Nuestra misión es brindar atención personalizada y la más alta calidad en servicios contables, auditoría, tributarios, asesoría y consultoría legal" />
						<img className='effect-4' src={Effect3} alt="Con profesionales experimentados y certificados, estamos aquí para impulsar el crecimiento de tu empresa." />
						<div className="banner__container w-full h-full flex items-center gap-4">
							<div className="w-full max-w-[700px] pt-0 sm:pt-40 lg:pt-80 text-center mx-auto lg:mx-0">
								<h4 className="text-base sm:text-2xl poppins-extrabold mb-4 text-red">
									Déjanos ser tu socio de confianza y descubre cómo podemos potenciar tu éxito financiero
								</h4>
								<img className='mx-auto mt-10' src={Icon5} alt="Déjanos ser tu socio de confianza y descubre cómo podemos potenciar tu éxito financiero" />
							</div>
						</div>
					</div>

					<div className="banner-gray">
						<div className="banner__container w-full h-full pt-[80px] md:pt-[300px] lg:pt-[350px]">
							<div className="w-full max-w[1200px] px-[20px] text-center mb-10">
								<p className="text-base sm:text-xl roboto-regular relative">
									En <b>Moyado | Auditores & Consultores</b>, entendemos la importancia de la colaboración.
									Contamos con alianzas estratégicas con profesionales en diversas áreas, incluyendo
									notarios, abogados fiscalistas, especialistas en estudios de mercado, y más.
								</p>
							</div>
							<div className="w-full max-w-[800px] px-[20px] text-center m-[auto]">
								<p className="text-base sm:text-xl roboto-regular relative">
									¡Estas alianzas nos permiten ofrecer servicios integrales
									que crean ventajas competitivas para tu empresa!
								</p>
							</div>
						</div>
						<img className='effect-5' src={Effect1} alt="En Moyado Auditores & Consultores, entendemos la importancia de la colaboración" />
						<img className='effect-6' src={Effect2} alt="Contamos con alianzas estratégicas con profesionales en diversas áreas, incluyendo notarios, abogados fiscalistas, especialistas en estudios de mercado, y más" />
					</div>

					<div id="services" className="w-screen h-auto relative z-20 pt-[100px] md:pt-[300px] -mb-20 md:mb-10 lg:mb-40 px-[40px]">
						<div className="banner__container w-full h-full flex items-center justify-center flex-wrap">
							<div className="w-full max-w-[990px] text-center">
								<h5 className="text-xl sm:text-2xl poppins-extrabold mb-12">
									Impulsar el crecimiento y la estabilidad de tu empresa con nuestros servicios especializados:
								</h5>
							</div>
							<div className="w-full flex flex-row flex-wrap mb-12">
								<div className="basis-[100%] sm:basis-1/2 lg:basis-1/3 flex justify-center lg:justify-start">
									<div className="service-item flex justify-center items-center" style={{ backgroundImage: `url(${Service1})` }}>
										<h5 className='poppins-bold text-white text-base lg:text-[35px]'>Auditoría de Estados Financieros</h5>
										<p className='roboto-regular text-[20px] lg:text-[28px] text-white'>
											Emisión de opiniones profesionales e independientes para garantizar
											la confianza de accionistas e instituciones financieras.
										</p>
									</div>
								</div>
								<div className="basis-[100%] sm:basis-1/2 lg:basis-1/3 flex justify-center">
									<div className="service-item flex justify-center items-center" style={{ backgroundImage: `url(${Service2})` }}>
										<h5 className='poppins-bold text-white text-base lg:text-[35px]'>Auditoría de Cumplimiento de Obligaciones (Preventivas)</h5>
										<p className='roboto-regular text-[20px] lg:text-[28px] text-white'>
											Verificación precisa del cumplimiento de obligaciones fiscales
											para prevenir contingencias.
										</p>
									</div>
								</div>
								<div className="basis-[100%] sm:basis-1/2 lg:basis-1/3 flex justify-center lg:justify-end">
									<div className="service-item flex justify-center items-center" style={{ backgroundImage: `url(${Service3})` }}>
										<h5 className='poppins-bold text-white text-base lg:text-[35px]'>Proyectos de Regularización Contable</h5>
										<p className='roboto-regular text-[20px] lg:text-[28px] text-white'>
											Optimización de cuentas para reflejar el valor real
											de los elementos patrimoniales.
										</p>
									</div>
								</div>
								<div className="basis-[100%] sm:basis-1/2 lg:basis-1/3 flex justify-center lg:justify-start">
									<div className="service-item flex justify-center items-center" style={{ backgroundImage: `url(${Service4})` }}>
										<h5 className='poppins-bold text-white text-base lg:text-[35px]'>Auditoría Operacional</h5>
										<p className='roboto-regular text-[20px] lg:text-[28px] text-white'>
											Identificación de áreas de oportunidad, reducción de costos
											y mejora de procesos para un rendimiento óptimo.
										</p>
									</div>
								</div>
								<div className="basis-[100%] sm:basis-1/2 lg:basis-1/3 flex justify-center">
									<div className="service-item flex justify-center items-center" style={{ backgroundImage: `url(${Service5})` }}>
										<h5 className='poppins-bold text-white text-base lg:text-[35px]'>Auditoría de IMSS e Infonavit</h5>
										<p className='roboto-regular text-[20px] lg:text-[28px] text-white'>
											Garantía de la correcta integración de cuotas y asesoría
											integral en nóminas y contratos laborales.
										</p>
									</div>
								</div>
								<div className="basis-[100%] sm:basis-1/2 lg:basis-1/3 flex justify-center lg:justify-end">
									<div className="service-item flex justify-center items-center" style={{ backgroundImage: `url(${Service6})` }}>
										<h5 className='poppins-bold text-white text-base lg:text-[35px]'>Asesoría y Consultoría Contable-Fiscal</h5>
										<p className='roboto-regular text-[20px] lg:text-[28px] text-white'>
											Evita riesgos fiscales con una ejecución contable-fiscal
											precisa y bien planificada.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div id="contact" className="banner-ppal w-screen h-[1200px] sm:h-[1100px] relative z-22" style={{ backgroundImage: `url(${Banner3})` }}>
						<img className='effect-7' src={Effect4} alt="Impulsar el crecimiento y la estabilidad de tu empresa con nuestros servicios especializados" />
						<div className="banner__container w-full h-full">
							<div className="text-white relative text-center pt-[270px] mb-10 md:mb-[80px]">
								<h6 className="text-xl sm:text-2xl lg:text-4xl poppins-extrabold mb-6">
									¡Tu éxito comienza aquí!
								</h6>
								<p className='roboto-regular text-base lg:text-xl'>
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