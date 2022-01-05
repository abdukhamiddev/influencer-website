/* eslint-disable react/no-unescaped-entities */
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Snapchat from "../public/assets/snapchat.webp";
import Button from "./Button";
const Circle = dynamic(() => import("../public/assets/circle.svg"));

const Comment = dynamic(() => import("../public/assets/comment.svg"));
const HandShake = dynamic(() => import("../public/assets/Vector.svg"));
const Influencer = dynamic(() => import("../public/assets/influencer.svg"));
const Canon = dynamic(() => import("../public/assets/canon.svg"));
const Unicef = dynamic(() => import("../public/assets/unicef.svg"));
const MasterCard = dynamic(() => import("../public/assets/mastercard.svg"));
const Suzuki = dynamic(() => import("../public/assets/suzuki.svg"));
const Supreme = dynamic(() => import("../public/assets/supreme.svg"));

const Feedback = () => {
	return (
		<div className="pt-[150px]">
			<div className="flex flex-col items-center justify-center mx-[2vw] lg:mx-0">
				<h1 className="font-bold font-sand text-[#23049D] text-center lg:text-[36px] md:leading-[40px] text-[17px] whitespace-pre  md:whitespace-normal">
					Influencer's feedback helps you grow <br />
					you in several ways
				</h1>

				<div>
					<Image src={Snapchat} width={977} height={602} alt="snapchat" />
				</div>
			</div>
			<div className="flex items-center font-bold justify-evenly font-inter">
				<div className="flex flex-col items-center">
					<h1 className="lg:text-[80px] text-[20px] text-[#AA2EE6]">6K</h1>
					<h3 className="lg:text-[18px] text-[14px]">Influencer</h3>
				</div>
				<div className="flex flex-col items-center">
					<h1 className="lg:text-[80px]  text-[20px]text-[#23049D]">4676</h1>
					<h3 className="lg:text-[18px] text-[14px]">Case Study</h3>
				</div>
				<div className="flex flex-col items-center">
					<h1 className="lg:text-[80px] text-[20px] text-[#AA2EE6]">16K</h1>
					<h3 className="lg:text-[18px] text-[12px]"> Project Submitted</h3>
				</div>
			</div>

			<div className="flex mx-[5vw] pt-[184px] gap-8 ">
				<div className="hidden lg:flex">
					<Circle />
				</div>

				<div className=" mx-[5vw]">
					<h1 className="font-sand font-bold text-[#23049d] lg:text-[36px] lg:leading-[40.01px] text-[20px]  ">
						Review by influencer help <br /> you to grow your business <br />
						several way
					</h1>
					<div className="grid gap-4 pt-[61px]">
						<div className="flex items-center gap-6 ">
							<div className="w-[71px] h-[71px] flex items-center  justify-center  bg-gray-100 rounded-md">
								<Influencer />
							</div>

							<div>
								<h1 className="font-bold sm:text-[18px] md:leading-[25px] font-sand text-[16px]">
									Post a job / Choose a Package
								</h1>
								<p className="text-[12px] whitespace-pre md:whitespace-normal md:text-[16px]">
									As you're browsing available influencer <br />
									marketing consultates.
								</p>
							</div>
						</div>
						<div className="flex items-center gap-6">
							<div className="w-[71px] h-[71px] flex items-center  justify-center bg-gray-100 rounded-md">
								<Comment />
							</div>

							<div>
								<h1 className="font-bold sm:text-[18px] md:leading-[25px] font-sand text-[16px]">
									Influencer come to you
								</h1>
								<p className="text-[12px] whitespace-pre md:whitespace-normal md:text-[16px]">
									As you're browsing available influencer <br />
									marketing consultates.
								</p>
							</div>
						</div>
						<div className="flex items-center gap-6">
							<div className="w-[71px] h-[71px] flex items-center justify-center bg-gray-100 rounded-md">
								<HandShake className="text-[#23049D]" />
							</div>

							<div className="">
								<h1 className="font-bold text-[18px] leading-[25px] font-sand">
									Collaborate easily
								</h1>
								<p className="text-[12px] whitespace-pre md:whitespace-normal md:text-[16px]">
									As you're browsing available influencer <br />
									marketing consultates.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="mx-[9vw]">
				<div className=" grid lg:grid-cols-2 pt-[120px] pb-[100px] grid-cols-1">
					<div className="flex flex-col items-start space-y-6">
						<h1 className="font-sand text-[#23049d] lg:text-[36px] md::leading-[41px] font-bold text-[20px]">
							You will not believe what <br />
							can be happened after <br />
							our contribution
						</h1>

						<p className="font-mulish text-[15px] leading-[150%]">
							Get qualified proposals within 24 hours. Compare bids, <br />
							reviews, and prior work. Interview favorites and hire the <br />
							best fit.
						</p>

						<Button className="bg-[#23049d] text-[#ffffff]  font-sand font-semibold text-[18px]">
							See Case Study
						</Button>
					</div>
					<div className="h-[293px] lg:w-[501px] bg-[#AA2EE6] flex justify-center rounded-[8px] mix-blend-normal sh-box mt-[50px] lg:mt-0 md:pt-0 w-auto">
						<div className="flex flex-col items-start justify-center space-y-6 ">
							<h1 className="text-[#ffffffcc] font-mulish lg:text-[20px] leading-[139.9%] text-[12px]">
								“Not exaggerating when I say the best <br /> account lead for a
								vendor influencer <br /> program – and trust me, I've worked
								with <br />
								quite a few.”
							</h1>

							<p className="font-bold font-sand text-[20px] leading-[112%] text-[#ffffff]">
								Tareq Aziz
							</p>
						</div>
					</div>
				</div>

				<div className="justify-between hidden gap-6 lg:flex">
					<Canon />
					<Unicef />
					<MasterCard />
					<Suzuki />
					<Supreme />
				</div>
			</div>
		</div>
	);
};

export default Feedback;
