import { useEffect, useState } from 'react';
import './card.css';

interface IProps {
	image: string;
	text: any;
}
const Card = ({ image, text }: IProps) => {
	const [alt, setAlt] = useState('');
	useEffect(() => {
		const tempElement = document.createElement('div');
		tempElement.innerHTML = text;
		setAlt(tempElement.textContent || tempElement.innerText)
	}, [text])
	return (
		<div className="card text-center">
			<div className="card__image mb-6">
				<img className='mx-auto' src={image} alt={alt} />
			</div>
			<div>
				<p className="card__text text-base" dangerouslySetInnerHTML={{ __html: text }}></p>
			</div>
		</div>
	)
}

export default Card;