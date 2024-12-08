import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        PlusJakartaSans:['Plus Jakarta Sans']
       },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryBlue: "var(--PrimaryBlue)",
        LightBlue: "var(--LightBlue)",
        SecondaryGray: "var(--SecondaryGray)"

      },
    },
  },
  plugins: [],
} satisfies Config;
