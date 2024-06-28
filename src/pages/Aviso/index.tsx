import '../Home/home.css';
import Layout from '../../components/Layout';

const Aviso = () => {

	return (
		<Layout aviso={true}>
			{
				<div>
					<div id="home" className="banner-ppal w-screen">
						<div className="banner__container w-full h-full flex items-center gap-4">
							<div className="w-full pt-[220px] pb-20">
								<h1 className="text-xl sm:text-3xl poppins-extrabold mb-4 efect-line--custom">
									Aviso de privacidad
								</h1>
								<p className="mb-8 text-[20px] sm:text-base roboto-regular">
									De acuerdo a lo previsto en la “Ley Federal de Protección de Datos
									Personales en Posesión de los Particulares”, <b>MOYADO AUDITORES & CONSULTORES</b>,
									es una empresa legalmente constituida de conformidad con las leyes mexicanas,
									ubicada en el domicilio: Avenida Hidalgo 3210, Col. Vallarta San Jorge,
									C.P. 44690, en Guadalajara, Jalisco. México; y como responsable de recabar
									sus datos personales y sensibles, dar el tratamiento adecuado y estrictamente
									confidencial a los mismos y garantizar su custodia y protección.
								</p>
								<p className="mb-4 text-[20px] sm:text-base roboto-regular">
									Su información personal será utilizada para realizar la promoción y venta en
									físico de los productos y servicios profesionales contables, fiscales y financieros;
									emitir la facturación fiscal; realizar llamadas telefónicas de cobranza, localización
									y verificación de la información del cliente, así como proporcionar seguimiento a los
									proyectos y cotizaciones realizadas; enviar correos electrónicos para la facturación
									electrónica y cotizaciones, hacer la recepción de comprobantes fiscales, brindar
									información, aclaraciones y boletines; y publicar y postear en redes sociales, y en
									general, para dar cumplimiento a las obligaciones que hemos contraído con usted.
								</p>
								<p className="mb-4 text-[20px] sm:text-base roboto-regular">
									Todos sus datos personales son tratados de acuerdo a la legislación aplicable y vigente
									en el país, por ello le informamos que usted tiene en todo momento los derechos al Acceso,
									Rectificación y Cancelación de sus datos personales, a Oponerse al tratamiento de los
									mismos o a revocar el consentimiento que para dicho fin nos haya otorgado. derecho que
									podrá hacer valer a través del Área de Administración, encargada de la seguridad de datos
									personales en el teléfono 3331211681 o por medio de su correo electrónico:
									derechosarcos@moyado.com.mx.
								</p>
								<p className="mb-4 text-[20px] sm:text-base roboto-regular">
									Este aviso de privacidad podrá ser modificado en cualquier momento por CCPGJ, dichas
									modificaciones serán oportunamente informadas a través de correo electrónico, teléfono,
									o cualquier otro medio que se determine para tal efecto.
								</p>
							</div>
						</div>
					</div>
				</div>
			}
		</Layout>
	)
}

export default Aviso