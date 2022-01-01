import React, { useState } from "react";
import Button from "./Button";
import Logo from "./Logo";
import HamMenu from "../public/assets/hamburger-menu.svg";

const Navbar = ({ navbarOpen, setNavbarOpen }) => {
	return (
		<>
			<div className="lg:flex justify-between items-center pt-[20px] hidden">
				<Logo />
				<ul className="flex space-x-8 font-ubuntu font-normal text-[18px]  leading-[20.65px]">
					<li>Home</li>
					<li>About</li>
					<li>Team</li>
					<li>Contact</li>
				</ul>
				<Button className="bg-[#ffdf68] text-[#23049d] font-sand font-semibold text-[18px] leading-[20.05px]">
					Account
				</Button>
			</div>
			<header className="lg:hidden flex w-full fixed top-0 left-0 p-10 z-20">
				<div className="flex-grow z-20">
					<Logo />
				</div>
				<button
					className="flex top-0 right-0 z-20 relative w-10 h-10 focus:outline-none"
					onClick={() => setNavbarOpen(!navbarOpen)}
				>
					<div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
						<span
							className={`absolute h-0.5 w-5 bg-gray-600 transform transition duration-300 ease-in-out ${
								navbarOpen ? "rotate-45 delay-200" : "-translate-y-1.5"
							}`}
						></span>
						<span
							className={`absolute h-0.5 bg-gray-600 transform transition-all duration-200 ease-in-out ${
								navbarOpen ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
							}`}
						></span>
						<span
							className={`absolute h-0.5 w-5 bg-gray-600 transform transition duration-300 ease-in-out ${
								navbarOpen ? "-rotate-45 delay-200" : "translate-y-1.5"
							}`}
						></span>
					</div>
				</button>
			</header>
		</>
	);
};

export default Navbar;
