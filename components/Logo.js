import React from "react";
import LogoImage from "../public/assets/logo.svg";
import Brand from "../public/assets/brand.svg";
const Logo = () => {
	return (
		<div className="flex items-center space-x-2">
			<LogoImage />
			<Brand />
		</div>
	);
};

export default Logo;
