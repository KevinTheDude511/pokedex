import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "var(--primary)",
                bug: "var(--bug)",
                dark: "var(--dark)",
                dragon: "var(--dragon)",
                electric: "var(--electric)",
                fairy: "var(--fairy)",
                fighting: "var(--fighting)",
                fire: "var(--fire)",
                flying: "var(--flying)",
                ghost: "var(--ghost)",
                normal: "var(--normal)",
                grass: "var(--grass)",
                ground: "var(--ground)",
                ice: "var(--ice)",
                poison: "var(--poison)",
                psychic: "var(--psychic)",
                rock: "var(--rock)",
                steel: "var(--steel)",
                water: "var(--water)",
                "dark-gray-scale": "var(--dark-gray-scale)",
                "medium-gray-scale": "var(--medium-gray-scale)",
                "light-gray-scale": "var(--light-gray-scale)",
                background: "var(--background)",
                white: "var(--white)",
            },
            boxShadow: {
                "inner-sm": "inset 0px 1px 3px 1px rgba(0, 0, 0, 0.25)",
                "drop-sm": "0px 1px 3px 1px #00000033",
                "drop-md": "0px 3px 12px 3px #00000033",
            },
            backgroundImage: {
                "pokemon-card": "linear-gradient(white 60%, var(--background) 40%)",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
export default config;
