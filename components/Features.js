/* eslint-disable react/no-unescaped-entities */
import React from "react";
import People from "../public/assets/handshape.svg";
import Hand from "../public/assets/socialshape.svg";
import Social from "../public/assets/peopleshape.svg";
import Star from "../public/assets/starshape.svg";
import Checked from "../public/assets/checked.svg";
import Button from "./Button";

const Features = () => {
	return (
		<section className="bg-gradient-to-b from-blue-50 to-blue-100  z-4">
			<div className="mx-[9vw]  relative z-20 space-x-[89px] grid lg:grid-cols-2 grid-cols-1  ">
				<div className="md:grid grid-cols-2 hidden">
					<div className="mt-[30px] space-y-4 lg:pr-[60px] w-[300px] ">
						<Star className="w-full object-contain" />
						<People />
					</div>
					<div className="space-y-4 lg:pl-[60px] w-auto">
						<Social />
						<Hand />
					</div>
				</div>
				<div className="space-y-8 pt-[50px] lg:pl-[40px]">
					<h1 className="text-[#23049D] font-sand font-bold text-[35px] leading-[100%]">
						Smart Way you can <br /> grow your business
					</h1>
					<p className="font-mulish text-[15px] leading-[22.5px]">
						As you're browsing available influencer marketing <br />
						consultates,it can be helpful to develope a sharelist of the <br />
						contractors you may want to interview
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
		</section>
	);
};

export default Features;
