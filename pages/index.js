/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useState } from "react";
import Button from "../components/Button";
import MenuOverlay from "../components/MenuOverlay";
import Navbar from "../components/Navbar";
import Woman from "../public/assets/woman.webp";

export default function Home() {
	const [navbarOpen, setNavbarOpen] = useState(false);
	return (
		<section className="">
			<Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
			<MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />

			<div className="bg-[url('/assets/blueshape.svg')] lg:h-screen  bg-no-repeat mt-[120px] relative  lg:mx-[10vw] flex h-[500px]  lg:w-auto md:w-auto  rounded-[50px] md:mx-[4vw]  mx-[4vw]">
				<div className="flex flex-col items-center justify-center  lg:text-justify xs:mx-[7vw] xs:text-center md:text-justify">
					<h1 className="font-semibold text-white font-sand lg:text-[65px] leading-[100%]  mb-[20px] xs:text-[30px] md:text-[50px]">
						Influencer will <br /> Review Your <br /> Products
					</h1>
					<p className="font-mulish text-[#ffffffcc] lg:pr-[140px]  lg:pl-0 md:pl-[40px]  text-[15px]  xs:text-[12px] md:pr-[100px]">
						As you’re browsing available influencer marketing
					</p>
					<Button className="bg-[#FF79CD]  font-sand text-white font-semibold mt-[22px] lg:mr-[270px] md:mr-[180px]">
						Get Started
					</Button>
				</div>
				<div className="xl:absolute xl:right-[40px] -top-28  hidden xl:flex ">
					<Image src={Woman} alt="influencer" width={500} height={660} />
				</div>
			</div>
		</section>
	);
}
