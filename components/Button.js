import React from "react";
import cn from "classnames";
const Button = ({ children, className }) => {
	return (
		<button className={cn(className, "py-[13px] px-[30px] rounded-[10px]")}>
			{children}
		</button>
	);
};

export default Button;
