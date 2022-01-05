import Image from "next/image";
import React from "react";
import Woman from "../public/assets/woman.webp";
import Button from "./Button";
const Hero = () => {
	return (
		<>
			<div className="bg-[url('/assets/blueshape.svg')] lg:h-screen  bg-no-repeat mt-[120px] relative  lg:mx-[10vw] flex    rounded-[50px]  mx-[4vw] mb-[40px] tallest:h-[500px] items-center ">
				<div className="flex flex-col items-center justify-center    lg:items-stretch xs:text-justify lg:pl-[50px] pb-[100px] tall:pb-[200px] pl-[20px]  pt-[100px] md:pt-[40px]  taller:py-[100px] ">
					<div>
						<h1 className="font-semibold text-white font-sand lg:text-[65px] leading-[100%]  mb-[20px] md:text-[50px] text-[30px] w-full ">
							Influencer will <br /> Review Your <br /> Products
						</h1>
					</div>
					<div className="mx-[2vw] w-[200px] sm:w-auto xs:mx-[0] xs:w-[300px] text-center">
						<p className="font-mulish text-[#ffffffcc] lg:pr-[140px]  lg:pl-0 md:pl-[40px]    xs:text-[12px] md:pr-[100px] text-[10px]   xs:pl-0 w-full ">
							As you’re browsing available influencer marketing
						</p>
					</div>

					<Button className="bg-[#FF79CD]  font-sand text-white font-semibold mt-[22px] lg:mr-[270px] md:mr-[180px] flex items-center justify-center">
						Get Started
					</Button>
				</div>

				<div className="xl:absolute xl:right-[40px] -top-28  hidden xl:flex ">
					<Image src={Woman} alt="influencer" width={500} height={660} />
				</div>
			</div>
		</>
	);
};

export default Hero;
