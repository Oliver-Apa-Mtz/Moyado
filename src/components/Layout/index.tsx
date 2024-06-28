import Header from '../Header';
import Footer from '../Footer';

interface Props {
	children: React.ReactNode;
	aviso?: boolean;
}

const Layout = ({ children, aviso }: Props) => {
	return (
		<div>
			<Header aviso={aviso} />
			<main className="body-contain">
				{children}
			</main>
			<Footer />
		</div>
	)
}

export default Layout