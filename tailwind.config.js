/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["*"],
	theme: {
		borderRadius: {
			none: "0",
			full: "100vmax",
			sm: "2px",
			DEFAULT: "4px",
			md: "6px",
			lg: "8px",
			xl: "10px",
		},
		fontSize: {
			xs: "0.75rem", // 12px
			sm: "0.875rem", // 14px
			base: "1rem", // 16px
			lg: "1.125rem", // 18px
			xl: "1.25rem", // 20px
			"2xl": "1.5rem", // 24px
			"3xl": "1.75rem", // 28px
			"4xl": "2rem", // 32px
			"5xl": "2.25rem", // 36px
			"6xl": "2.625rem", // 42px
			"7xl": "3rem", // 48px
			"8xl": "3.5rem", // 56px
			"9xl": "3.75rem", // 60px
			"10xl": "4.125rem", // 66px
			"11xl": "4.5rem", // 72px
			"12xl": "5rem", // 80px
			"13xl": "5.5rem", // 88px
			"14xl": "6rem", // 96px
		},
		fontStretch: {
			50: "50%",
			62.5: "62.5%",
			75: "75%",
			87.5: "87.5%",
			100: "100%",
			112.5: "112.5%",
			125: "125%",
			150: "150%",
			200: "200%",
		},
		lineHeight: {
			none: 1,
			tighter: 1.1,
			tight: 1.2,
			snug: 1.4,
			normal: 1.6,
			relaxed: 1.75,
			loose: 2,
		},
		screens: {
			xs: "390px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1640px",
		},
		extend: {},
	},
	plugins: [],
};
