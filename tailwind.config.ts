import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      backgroundImage: {
        hero: "url('/images/bg.svg')",
        loki: "url('/images/loki.svg')",
        multiverse: "url('/images/multiverse.svg')",
        event_bg: "url('/images/background.svg')",
        club_bg: "url('/images/club.png')",
      },
      boxShadow: {
        xs: "1px 1px 0 0 rgba(250, 134, 27, 0.5)",
        md: "3px 3px 0 0 rgba(250, 134, 27, 0.5)",
        "3xl": "10px 10px 0 0 rgba(250, 134, 27, 0.5)",
      },
      textShadow: {
        default: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        md: "4px 4px 8px rgba(0, 0, 0, 0.3)",
        lg: "6px 6px 12px rgba(0, 0, 0, 0.3)",
      },
      letterSpacing: {
        widest: ".25em",
      },
      gridTemplateColumns: {
        text: "grid-template-columns: 3fr 2fr;",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animated"),
    require("tailwindcss-motion"),
    require("tailwindcss-intersect"),
    require("tailwindcss-textshadow"),
    require("@nauverse/tailwind-dot-grid-backgrounds"),
    require("tailwindcss-animate"),
  ],
} satisfies Config;
