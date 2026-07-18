/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    theme: {
        extend: {
            colors: {
                cyber: {
                    dark: '#0b1020',
                    card: '#121216',
                    primary: '#c026d3',
                    secondary: '#06b6d4',
                    accent: '#10b981',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            }
        }
    },
    plugins: []
}
