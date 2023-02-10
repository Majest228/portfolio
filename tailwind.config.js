/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "bg": "#0E1828",
      "white": "#ffffff",
      "gray": "#C6C6C6",
      "bg-cyan": "#00B1CD",
      "cyan": "#00B1CD",
      "blue": "#05D2CA",
      "black": "#000000",
      "red": "#D5214A"
    },
    container: {
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
        '3xl': '1656px',
      }
    },
    fontSize: {
      "fz-34": "34px",
      "fz-20": "20px",
      "fz-22": "22px",
      "fz-56": "56px",
      "fz-44": "44px",
      "fz-32": "32px",
      "fz-26": "26px"

    },
    lineHeight: {
      "lh-45": "45px",
      "lh-32": "32px",
      "lh-74": "74px",
      "lh-58": "58px",
      "lh-29": "29px",
      "lh-42": "42px"
    },
    padding: {
      "pt-14": "14px",
      "pt-7": "7px",
      "pl-16": "16px",
      "pr-16": "16px",
      "py-10": "10px",
      "px-24": "24px",
      "pt-40": "40px",
      "20": "20px",
      "36": "36px",
      "23": "23px",
      "56": "56px",
    },
    margin: {
      '186px': '186px',
      '246px': '246px',
      "70": "70px",
      "72": "72px",
      "18": "18px",
      "89": "89px",
      "150": "150px",
      "100": "100px",
      "156": "156px",
      "0-auto": "0 auto",
      "54": "54px",
      "50": "50px",
      "36": "36px",
      "40": "40px"

    },
    maxWidth: {
      "882": "882px",
      "778": "778px",
      "1656": "1656px",
      "full": "100%",
      "144": "144px",
      "346": "346px",
      "470": "470px",
      "812": "812px",
      "130": "130px",
      "331": "331px",
      "1070": "1070px",
    },
    height: {
      "50": "70px",
      "8": "8px",
      "461": "461px"
    },
    width: {
      "770": "770px",
      "full": "100%",
      "461": "461px"
    },

    boxShadow: {
      "header": "0 10px 30px -10px"
    },
    minHeight: {
      "778": "778px",
      "100vh": "100vh",

    },
    minWidth: {
      "1000px": "1000px"
    },
    keyframes: {
      link: {
        '0%': { transform: 'translateY(-4000px)' },
        '100%': { transform: 'translateY(0)' },
      }
    },
    translate: {
      "out": "-50%, -50%"
    },
    animation: {
      title: 'link 0.3s ease-in-out forwards',
    },
    plugins: [],

  }
}