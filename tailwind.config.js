/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      plugins: [],
      corePlugins: {
    // Adicione esta configuração global
    scrollBehavior: true,
  },
      scrollbar: {
        hide: {
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          '-ms-overflow-style': 'none', // IE and Edge
          'scrollbar-width': 'none',   // Firefox
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(20px)', opacity: '0' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },


      animation: {
       'fadeIn': 'fadeIn 0.3s ease-out forwards',
        'fadeOut': 'fadeOut 0.3s ease-out forwards',
        'slideUp': 'slideUp 0.3s ease-out forwards',
        'slideDown': 'slideDown 0.3s ease-out forwards',
        'slide-in-up': 'slideInUp 0.5s ease-out forwards',
      },
      
    },
  },
  plugins: [],
};