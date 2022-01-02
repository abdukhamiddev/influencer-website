const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		screens: { xs: "360px", ...defaultTheme.screens },
		fontFamily: {
			sand: ["Quicksand", "sans-serif"],
			mulish: ["Mulish", "sans-serif"],
			nori: ["Norican", "sans-serif"],
			ubuntu: ["Ubuntu", "sans-serif"],
		},
		extend: {},
	},
	plugins: [
		require("postcss-import"),
		require("tailwindcss"),
		require("autoprefixer"),
	],
};
