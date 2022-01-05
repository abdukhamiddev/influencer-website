import dynamic from "next/dynamic";
import React from "react";
const Social = dynamic(() => import("../public/assets/Social.svg"));

const Footer = () => {
	return (
		<div className="mx-[9vw]">
			<div className="flex justify-between pb-[70px]  flex-col md:flex-row">
				<div className="">
					<div className="pb-[30px]">
						<Social />
					</div>

					<div>
						<h1 className="font-mulish text-[15px] text-[#000000] pb-[15px]">
							Office 51, Zawaya Building, Ghala <br />
							Muscat, Sultanate of Oman
						</h1>
						<p className="font-mulish text-[15px] text-[#000000] pb-[40px]">
							2021, Social Network and Organization
						</p>
					</div>
					<h2 className="font-mulish text-[15px] text-[#000000] pb-[15px]">
						Privacy Policy | Terms of use
					</h2>
				</div>
				<div className="flex flex-col justify-evenly ">
					<div>
						<h1 className="font-bold font-sand text-[18px]"> Email</h1>
						<p className="font-mulish text-[15px]">aflamesaimon@gmail.com</p>
					</div>
					<div>
						<h1 className="font-bold font-sand text-[18px]">Call</h1>
						<p className="font-mulish text-[15px]">+962 9212 0341</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
