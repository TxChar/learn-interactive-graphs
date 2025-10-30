/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}', // <-- THIS IS THE MOST IMPORTANT LINE
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
