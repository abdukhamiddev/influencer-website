/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Snapchat from "../public/assets/snapchat.svg";

import Circle from "../public/assets/circle.svg";
import Comment from "../public/assets/comment.svg";
import HandShake from "../public/assets/Vector.svg";
import Influencer from "../public/assets/influencer.svg";
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

			<div className="flex mx-[5vw] pt-[184px] gap-8 ">
				<div>
					<Circle />
				</div>
				<div>
					<h1 className="font-sand font-bold text-[#23049d] text-[36px] leading-[40.01px]">
						Review by influencer help <br /> you to grow your business <br />
						several way
					</h1>
					<div className="grid gap-4 pt-[61px]">
						<div className="flex items-center gap-6">
							<div className="w-[71px] h-[71px] flex items-center  justify-center  bg-gray-100 rounded-md">
								<Influencer />
							</div>

							<div>
								<h1 className="font-bold text-[18px] leading-[25px] font-sand">
									Post a job / Choose a Package
								</h1>
								<p>
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
								<h1 className="font-bold text-[18px] leading-[25px] font-sand">
									Influencer come to you
								</h1>
								<p>
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
								<p>
									As you're browsing available influencer <br />
									marketing consultates.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Feedback;
