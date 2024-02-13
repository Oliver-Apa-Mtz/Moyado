import './form.css';

const Form = () => {
	return (
		<div className="form">
			<div className='flex mb-6'>
				<label htmlFor="" className="roboto-bold text-2xl text-white">Nombre completo:*</label>
				<input className='flex-1' type="text" />
			</div>
			<div className='flex mb-6'>
				<label htmlFor="" className="roboto-bold text-2xl text-white">Correo electrónico:*</label>
				<input className='flex-1' type="text" />
			</div>
			<div className='flex mb-6'>
				<label htmlFor="" className="roboto-bold text-2xl text-white">Teléfono:*</label>
				<input className='flex-1' type="text" />
			</div>
			<div className='flex mb-6'>
				<label htmlFor="" className="roboto-bold text-2xl text-white">Idioma de tu interés:*</label>
				<input className='flex-1' type="text" />
			</div>
			<div className='flex justify-center items-center mt-[80px]'>
				<div className='button poppins-extrabold text-[35px] flex justify-center items-center'>Enviar</div>
			</div>
		</div>
	)
}

export default Form;