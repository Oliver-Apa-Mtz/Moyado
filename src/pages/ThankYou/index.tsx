import '../Home/home.css';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout';
import Banner from '../../assets/img/thankyou.webp';

const ThankYou = () => {
	const navigate = useNavigate();

	return (
		<Layout aviso={true}>
			{
				<div>
					<div className='h-[115px] relative block bg-black'></div>
					<div id="home" className="banner-ppal w-screen min-h-[600px] flex items-center" style={{ backgroundImage: `url(${Banner})`, backgroundPosition: 'center bottom' }}>
						<div className="banner__container w-full h-full flex items-center gap-4">
							<div className="w-full h-full flex justify-center items-center">
								<div className="text-white text-center w-full">
									<h1 className="text-xl sm:text-3xl poppins-extrabold mb-4">
										Mensaje enviado con éxito
									</h1>
									<p className="mb-8 text-[20px] sm:text-base roboto-regular">
										Gracias por confiar en tu despacho contable de Guadalajara
									</p>
									<div className="w-full sm:w-[550px] mx-auto">
										<div className='button poppins-extrabold text-[20px] sm:text-[30px] flex justify-center items-center'>
											<div className='cursor-pointer' onClick={() => navigate('/')}>Continuar navegando</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			}
		</Layout>
	)
}

export default ThankYou