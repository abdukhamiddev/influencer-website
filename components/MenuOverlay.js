import React from "react";
import Link from "next/link";
const MenuOverlay = ({ navbarOpen, setNavbarOpen }) => {
	return (
		<nav
			className={` lg:hidden fixed flex top-0 left-0 w-full px-10 z-10 h-screen pt-24 bg-gray-900 transform delay-100 duration-300 ${
				navbarOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
			}`}
		>
			<ul className="w-full flex flex-col items-start">
				<li className="nav-li">
					<Link
						href="/"
						className="nav-link"
						onClick={() => setNavbarOpen(false)}
					>
						Home
					</Link>
				</li>
				<li className="nav-li">
					<Link
						href="/"
						onClick={() => setNavbarOpen(false)}
						className="nav-link"
					>
						About
					</Link>
				</li>
				<li className="nav-li">
					<Link
						href="/"
						onClick={() => setNavbarOpen(false)}
						className="nav-link"
					>
						Team
					</Link>
				</li>
				<li className="nav-li">
					<Link
						href="/"
						onClick={() => setNavbarOpen(false)}
						className="nav-link"
					>
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default MenuOverlay;
