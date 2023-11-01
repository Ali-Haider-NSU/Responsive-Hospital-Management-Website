/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*"],
    theme: {
        extend: {
            transitionDuration: {

                '0': '0ms',

                '2000': '5s',
            }
        },
    },
    plugins: [],
}