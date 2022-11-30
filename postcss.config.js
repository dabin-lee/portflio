// postcss.config.js
//Postcss가 빌드 시에 tailwindcss를 일반 css로 변환


module.exports = {
    plugins: {
        tailwindcss: { config: './tailwind.config.js' },
        autoprefixer: {},
    },
};