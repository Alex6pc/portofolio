import type { Config } from "tailwindcss";

import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        background: {
          DEFAULT: "var(--background)",
          secondary: "var(--background-secondary)",
        },
        text: {
          DEFAULT: "var(--foreground-primary)",
          secondary: "var(--foreground-secondary)",
        },
        border: {
          DEFAULT: "var(--border)",
          secondary: "var(--border-secondary)",
          decorative: "var(--border-decorative)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          text: "var(--primary-foreground)",
          hover: "var(--primary-hover)",
          border: "var(--primary-border)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          text: "var(--secondary-foreground)",
          hover: "var(--secondary-hover)",
          border: "var(--secondary-border)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          text: "var(--accent-foreground)",
          hover: "var(--accent-hover)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          text: "var(--muted-foreground)",
          hover: "var(--muted-hover)",
        },
        activeBorder: "rgb(208, 22, 106)",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {},
      animation: {},
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        heading: ["var(--font-heading)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
