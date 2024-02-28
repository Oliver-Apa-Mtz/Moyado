import './form.css';

const Form = () => {
	return (
		<div className="form">
			<div className='md:flex mb-6 items-center'>
				<label htmlFor="nombreCompleto" className="roboto-bold text-[22px] lg:text-2xl text-white">Nombre completo:*</label>
				<input id="nombreCompleto" className='flex-1 text-[22px] px-4' type="text" />
			</div>
			<div className='md:flex  mb-6 items-center'>
				<label htmlFor="correoElectronico" className="roboto-bold text-[22px] lg:text-2xl text-white">Correo electrónico:*</label>
				<input id="correoElectronico" className='flex-1 text-[22px] px-4' type="text" />
			</div>
			<div className='md:flex  mb-6 items-center'>
				<label htmlFor="telefono" className="roboto-bold text-[22px] lg:text-2xl text-white">Teléfono:*</label>
				<input id="telefono" className='flex-1 text-[22px] px-4' type="text" />
			</div>
			<div className='md:flex  mb-6 items-center'>
				<label htmlFor="idiomaInteres" className="roboto-bold text-[22px] lg:text-2xl text-white">Idioma de tu interés:*</label>
				<input id="idiomaInteres" className='flex-1 text-[22px] px-4' type="text" />
			</div>
			<div className='md:flex  justify-center items-center mt-[40px] lg:mt-[80px]'>
				<div className='button poppins-extrabold text-[35px] flex justify-center items-center'>Enviar</div>
			</div>
		</div>
	)
}

export default Form;