import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

import './form.css';
import { isValidEmail } from '../../utils/utils';

const Form = () => {
	const navigate = useNavigate();
	const formRef = useRef<HTMLFormElement | null>(null);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		idioma: '',
	});
	const [alert, setAlert] = useState({
		show: false,
		message: '',
	})

	const handleChange = (e: any) => {
		setAlert({
			show: false,
			message: '',
		})
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value
		});
	};

	const sendEmail = (e: any) => {
		e.preventDefault();
		if (formData.name.length > 0 && formData.email.length > 0 && formData.phone.length > 0 && formData.idioma.length > 0) {
			if (!isValidEmail(formData.email)) {
				setAlert({
					show: true,
					message: 'Por favor, introduce un correo electrónico válido'
				})
				return;
			}
			emailjs.sendForm(
				import.meta.env.VITE_VERCEL_ENV_EMAILJS_SERVICE_ID || '',
				import.meta.env.VITE_VERCEL_ENV_EMAILJS_TEMPLATE_ID || '',
				e.target,
				import.meta.env.VITE_VERCEL_ENV_EMAILJS_USER_ID
			).then(() => {
				navigate('/gracias-por-contactarnos')
			}, () => {
				setAlert({
					show: true,
					message: 'Por el momento el servicio no esta disponible, intentalo más tarde'
				})
			});

			setFormData({
				name: '',
				email: '',
				phone: '',
				idioma: '',
			});
		} else {
			setAlert({
				show: true,
				message: 'Por favor complete todos los campos'
			})
		}
	};

	return (
		<div className="form">
			<form onSubmit={sendEmail} ref={formRef}>
				<div className='md:flex mb-6 items-center'>
					<label htmlFor="name" className="roboto-bold text-[22px] lg:text-2xl text-white">Nombre completo:*</label>
					<input name="name" id="name" value={formData.name} onChange={handleChange} className='flex-1 text-[22px] px-4' type="text" />
				</div>
				<div className='md:flex  mb-6 items-center'>
					<label htmlFor="email" className="roboto-bold text-[22px] lg:text-2xl text-white">Correo electrónico:*</label>
					<input name="email" id="email" value={formData.email} onChange={handleChange} className='flex-1 text-[22px] px-4' type="text" />
				</div>
				<div className='md:flex  mb-6 items-center'>
					<label htmlFor="phone" className="roboto-bold text-[22px] lg:text-2xl text-white">Teléfono:*</label>
					<input name="phone" id="phone" value={formData.phone} onChange={handleChange} className='flex-1 text-[22px] px-4' type="text" />
				</div>
				<div className='md:flex  mb-6 items-center'>
					<label htmlFor="idioma" className="roboto-bold text-[22px] lg:text-2xl text-white">Idioma de tu interés:*</label>
					<input name="idioma" id="idioma" value={formData.idioma} onChange={handleChange} className='flex-1 text-[22px] px-4' type="text" />
				</div>
				<div className='md:flex justify-center items-center mt-[40px] lg:mt-[80px]'>
					<div className='button poppins-extrabold text-[35px] flex justify-center items-center'>
						<input className='cursor-pointer' type="submit" value="Enviar" disabled={alert.show} />
					</div>
				</div>
				{alert.show && (
					<div className="bg-black p-4 rounded-xl my-4 w-full md:w-max mx-auto" role="alert">
						<p className="text-white be-vietnam-light text">{alert.message}</p>
					</div>
				)}
			</form>
		</div>
	)
}

export default Form;