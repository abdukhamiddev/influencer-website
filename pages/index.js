import { useState } from "react";
import MenuOverlay from "../components/MenuOverlay";
import Navbar from "../components/Navbar";

export default function Home() {
	const [navbarOpen, setNavbarOpen] = useState(false);
	return (
		<section className="px-[14vw]">
			<Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
			<MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
		</section>
	);
}
