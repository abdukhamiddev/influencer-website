import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
const Stars = dynamic(() => import("../public/assets/stars.svg"));
const Facebook = dynamic(() => import("../public/assets/facebook.svg"));
const Instagram = dynamic(() => import("../public/assets/instagram.svg"));

const Card = ({ ImagePerson, name, surname, country, city }) => {
	return (
		<div className="w-[240] h-[280]  bg-gray-50 shadow-xl rounded-[5px] shadow-slate-300">
			<div className="py-[18px] px-[12px] ">
				<div className="flex flex-col items-center justify-center">
					<div>
						<Image src={ImagePerson} alt="people" priority />
					</div>
					<h1 className="pt-4 font-bold font-sand text-[24px]">
						{name}, {surname}
					</h1>
					<p className="font-semibold font-sand text-[15px] text-[#00000099]">
						{city}, {country}
					</p>
					<div className="pt-4">
						<Stars />
					</div>
				</div>

				<div className="flex pt-6 space-x-4">
					<div className="w-[91px] h-[35px] bg-blue-100 flex justify-center items-center rounded-md space-x-3">
						<Facebook />
						<h1 className="font-sand text-[15px] leading-[111%] font-bold">
							1.6M
						</h1>
					</div>
					<div className="w-[91px] h-[35px] bg-blue-100 flex items-center justify-center rounded-md space-x-3">
						<Instagram />
						<h1 className="font-sand text-[15px] leading-[111%] font-bold">
							639K
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
