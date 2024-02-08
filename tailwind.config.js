/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				principal: "#0F323E",
				secundario: "#f6f2ef",
				terciario: "#F3E45C",
				white: "#FFFFFF",
			},
		},
		fontFamily: {
			sans: ["Montserrat", "sans-serif"],
			serif: ["Playfair Display", "serif"],
		},
		fontSize: {
			sm: "14px",
			base: "25px",
			xl: "30px",
			"2xl": "40px",
			"3xl": "45px",
			"4xl": "60px",
		},
	},
	plugins: [],
};
