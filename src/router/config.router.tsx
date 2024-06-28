import { Routes, Route } from "react-router-dom";
import { ScrollToTop } from "../utils/utils";

import Home from "../pages/Home";
import Aviso from "../pages/Aviso";
import ThankYou from "../pages/ThankYou";

export const Router = () => {
	return (
		<>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<Home />} />
				<Route path="/aviso-de-privacidad" element={<Aviso />} />
				<Route path="/gracias-por-contactarnos" element={<ThankYou />} />
			</Routes>
		</>
	);
}
