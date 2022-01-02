/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Snapchat from "../public/assets/snapchat.svg";

const Feedback = () => {
	return (
		<div className="pt-[150px]">
			<div className="flex flex-col items-center justify-center">
				<h1 className="font-bold font-sand text-[#23049D] text-center text-[36px] leading-[40px]">
					Influencer's feedback helps you grow <br />
					you in several ways
				</h1>

				<div>
					<Snapchat />
				</div>
			</div>
			<div className="flex items-center font-bold justify-evenly font-inter">
				<div className="flex flex-col items-center">
					<h1 className="text-[80px] text-[#AA2EE6]">6K</h1>
					<h3 className="text-[18px]">Influencer</h3>
				</div>
				<div className="flex flex-col items-center">
					<h1 className="text-[80px] text-[#23049D]">4676</h1>
					<h3 className="text-[18px]">Case Study</h3>
				</div>
				<div className="flex flex-col items-center">
					<h1 className="text-[80px] text-[#AA2EE6]">16K</h1>
					<h3 className="text-[18px]"> Project Submitted</h3>
				</div>
			</div>
		</div>
	);
};

export default Feedback;
