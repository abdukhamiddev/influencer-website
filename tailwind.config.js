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
			inter: ["Inter", "sans-serif"],
		},
		extend: {
			screens: {
				tall: { raw: "(min-height: 800px)" },
				taller: { raw: "(min-height: 1024px)" },
				tallest: { raw: "(min-height: 1366px)" },
			},
		},
	},
	plugins: [
		require("postcss-import"),
		require("tailwindcss"),
		require("autoprefixer"),
	],
};
