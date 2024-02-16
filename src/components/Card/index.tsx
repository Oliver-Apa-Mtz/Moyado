import './card.css';

interface IProps {
	image: string;
	text: any;
}
const Card = ({ image, text }: IProps) => {
	return (
		<div className="card text-center">
			<div className="card__image mb-6">
				<img className='mx-auto' src={image} alt="" />
			</div>
			<div>
				<p className="card__text text-base" dangerouslySetInnerHTML={{ __html: text }}></p>
			</div>
		</div>
	)
}

export default Card;