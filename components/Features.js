/* eslint-disable react/no-unescaped-entities */
import React from "react";
import People from "../public/assets/handshape.svg";
import Hand from "../public/assets/socialshape.svg";
import Social from "../public/assets/peopleshape.svg";
import Star from "../public/assets/starshape.svg";
import Checked from "../public/assets/checked.svg";

import Girl2 from "../public/assets/girl.svg";
import Button from "./Button";

const Features = () => {
	return (
		<>
			<section className="bg-gradient-to-b from-blue-50 to-blue-100 z-4">
				<div className="lg:mx-[9vw]  relative z-20 lg:space-x-[89px] grid lg:grid-cols-2 grid-cols-1  ">
					<div className="hidden grid-cols-2 lg:grid">
						<div className="mt-[30px] space-y-4 lg:pr-[60px] w-[300px] ">
							<Star className="object-contain w-full" />
							<People />
						</div>
						<div className="space-y-4 lg:pl-[60px] w-auto">
							<Social />
							<Hand />
						</div>
					</div>
					<div className="space-y-8 pt-[50px] lg:pl-[40px] flex flex-col    mx-[6vw] md:mx-[8vw] items-center lg:items-stretch">
						<h1 className="text-[#23049D] font-sand font-bold md:text-[45px] leading-[100%] text-[30px] text-center md:text-justify lg:text-[35px]">
							Smart Way you can <br /> grow your business
						</h1>
						<p className="font-mulish md:text-[15px] leading-[22.5px] text-[14px] ">
							As you're browsing available influencer marketing <br />
							consultates,it can be helpful to develope a sharelist <br /> of
							they contractors you may want to interview
						</p>
						<div className="font-sand font-bold text-[15px] leading-[22.5px] ">
							<div className="flex pb-[10px] space-x-2">
								<Checked />
								<h3>Nice targeted Worldwide influencers</h3>
							</div>
							<div className="flex pb-[10px] space-x-2">
								<Checked />
								<h3>Active accounts with engagement</h3>
							</div>
							<div className="flex space-x-2">
								<Checked />
								<h3>Guide to negotiating with influencers</h3>
							</div>
						</div>
						<Button className="font-sand font-semibold text-[18px] leading-[20.05px] bg-[#23049D] text-white">
							Find for someone
						</Button>
					</div>
				</div>
				<div className=" lg:mx-[9vw] pt-[166px]    flex  justify-center  items-center lg:items-stretch  lg:justify-between">
					<div>
						<h1 className="font-nori font-normal text-[34px] text-[#aa2ee6] leading-[37.88px] pb-[13px]">
							Top Influencers This Month
						</h1>
						<h2 className="font-bold font-sand text-[#23049d] text-[35px] leading-[35px] pb-[30px]">
							Use beatiful content <br />
							created by influencers
						</h2>
						<p className="font font-mulish text-[15px] leading-[22.5px]">
							As you're browsing available influencer marketing <br />
							consultates,it can be helpful to develope a sharelist of the{" "}
							<br />
							contractors you may want to interview
						</p>
						<div className="pt-[51px] flex flex-col">
							<div>
								<div className="mb-[22px]  flex space-x-[20px]">
									<Button className="font-sand font-semibold text-[#5991DE] bg-[#ffffff]">
										Beauty & Fashion
									</Button>
									<Button className="font-semibold font-sand bg-[#ffffff] text-[#dd783e] ">
										Smart and Gadget
									</Button>
								</div>

								<div className="flex space-x-[20px]">
									<Button className="font-semibold font-sand bg-[#ffffff] text-[#ee5188]">
										Home and Interio
									</Button>
									<Button className="font-semibold font-sand bg-[#ffffff] text-[#4bbf83]">
										Software Products
									</Button>
								</div>
							</div>
						</div>
						<div className="flex justify-center">
							<Button className="text-white bg-[#23049d] mt-[50px] font-sand font-semibold text-[18px] leading-[21px]">
								Check Profile
							</Button>
						</div>
					</div>
					<div className="hidden lg:flex">
						<Girl2 />
					</div>
				</div>
			</section>
		</>
	);
};

export default Features;
