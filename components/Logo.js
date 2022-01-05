import React from "react";
import dynamic from "next/dynamic";
const LogoImage = dynamic(() => import("../public/assets/logo.svg"));
import Brand from "../public/assets/brand.svg";
const Logo = () => {
	return (
		<div className="flex items-center space-x-4 ">
			<LogoImage />
			<Brand />
		</div>
	);
};

export default Logo;
