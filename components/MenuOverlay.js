import React from "react";
import Link from "next/link";
import Button from "./Button";
const MenuOverlay = ({ navbarOpen, setNavbarOpen }) => {
	return (
		<nav
			className={` lg:hidden absolute  flex top-0 left-0 w-full px-10 z-10 h-screen pt-24 bg-gradient-to-br from-purple-50 to-purple-300 transform delay-100 duration-300 ${
				navbarOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
			}`}
		>
			<div className="flex flex-col gap-12">
				<ul className="flex flex-col items-start w-full cursor-pointer font-ubuntu">
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
				<Button className="bg-[#ffdf68] text-[#23049d] font-sand font-semibold text-[18px] leading-[20.05px]">
					Account
				</Button>
			</div>
		</nav>
	);
};

export default MenuOverlay;
