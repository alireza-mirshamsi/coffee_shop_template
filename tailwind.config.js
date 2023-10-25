/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/*.{html,js}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "brown": {
                    100: "#ECE0D1",
                    300: "#DBC1AC",
                    600: "#967259",
                    900: "#634832",
                }
            },
            boxShadow: {
                "normal": "0px 1px 10px 0px #0000000D",
            },
            borderRadius: {
                "4xl": "2rem"
            },
            fontFamily: {
                "Dana": "Dana",
                "DanaMedium": "Dana Medium",
                "DanaDemiBold": "Dana DemiBold",
                "Morabba": "Morabba Light",
                "MorabbaMeduim": "Morabba Meduim",
                "MorabbaBold": "Morabba Bold"
            },
            letterSpacing: {
                "tightest": "-0.065em"
            },
            spacing: {
                "30": "7.5rem"
            }
        },
    },
    plugins: [
        function({ addVariant }) {
            addVariant('child', '& > * ');
            addVariant('child-hover', '& > *:hover');
        }
    ],
}