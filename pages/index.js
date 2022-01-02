import { useState } from "react";
import Features from "../components/Features";

import Hero from "../components/Hero";
import MenuOverlay from "../components/MenuOverlay";
import Navbar from "../components/Navbar";

export default function Home() {
	const [navbarOpen, setNavbarOpen] = useState(false);
	return (
		<section className="">
			<Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
			<MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
			<Hero />
			<Features />
		</section>
	);
}
