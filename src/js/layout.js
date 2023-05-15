import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.js";

import { Home } from "./views/home.js";
import { People } from "./views/People.js";
import { DetailsPeople } from "./views/DetailsPeople.js"
import { Planets } from "./views/Planets.js";
import { DetailsPlanets } from "./views/DetailsPlanets.js";
import { Starships } from "./views/Starships.js";
import { DetailsShip} from "./views/DetailsShip.js";
import { Single } from "./views/single.js";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar.js";
import { Footer } from "./component/footer.js";

// people: https://starwars-visualguide.com/assets/img/characters/1.jpg
// host = "https://starwars-visualguide.com/assets/img/"
// category = { "people": "characters" }
// id = #
// ext = ".jpg"

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/people" element={<People />} />
						<Route path="/people/:theid" element={<DetailsPeople />} />
						<Route path="/planets" element={<Planets />} />
						<Route path="/planets/:theid" element={<DetailsPlanets />} />
						<Route path="/starships" element={<Starships />} />
						<Route path="/starships/:theid" element={<DetailsShip />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);