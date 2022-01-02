import React, { useState } from "react";
import Button from "./Button";
import Logo from "./Logo";
import HamMenu from "../public/assets/hamburger-menu.svg";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = ({ navbarOpen, setNavbarOpen }) => {
	return (
		<>
			<div className="lg:flex justify-between items-center pt-[20px] hidden px-[11vw]">
				<Logo />
				<ul className="flex space-x-8 font-ubuntu font-normal text-[18px]  leading-[20.65px] cursor-pointer">
					<li>Home</li>
					<li>About</li>
					<li>Team</li>
					<li>Contact</li>
				</ul>
				<Button className="bg-[#ffdf68] text-[#23049d] font-sand font-semibold text-[18px] leading-[20.05px] mr-[22px]">
					Account
				</Button>
			</div>
			<header className="fixed top-0 left-0 z-20 flex w-full p-10 lg:hidden pb-[50px]">
				<div className="z-20 flex-grow">
					<Logo />
				</div>
				<button
					className="relative top-0 right-0 z-20 flex w-10 h-10 focus:outline-none"
					onClick={() => setNavbarOpen(!navbarOpen)}
				>
					<HamburgerMenu navbarOpen={navbarOpen} />
				</button>
			</header>
		</>
	);
};

export default Navbar;
