module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '2rem',
                    lg: '3rem',
                    xl: '4rem',
                    '2xl': '5rem',
                },
            },
        },
    },
    daisyui: {
        themes: false,
    },
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
