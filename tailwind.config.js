/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1ABC9C',
        secondary: '#2C3E50',
        accent: '#F39C12',
        neutral: '#ECF0F1',
        // Cybersecurity-themed colors
        'cyber-green': '#00FF41',
        'cyber-dark': '#0D0D0D',
        'cyber-darker': '#050505',
        'cyber-blue': '#00D9FF',
        'cyber-purple': '#B026FF',
        'matrix-green': '#00FF41',
        'terminal-green': '#33FF33',
        'neon-green': '#39FF14',
        'dark-bg': '#0A0E27',
        'dark-card': '#151A2E',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'scan': 'scan 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        glow: {
          '0%': { 
            boxShadow: '0 0 5px rgba(0, 255, 65, 0.5), 0 0 10px rgba(0, 255, 65, 0.3)',
          },
          '100%': { 
            boxShadow: '0 0 20px rgba(0, 255, 65, 0.8), 0 0 30px rgba(0, 255, 65, 0.5)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      boxShadow: {
        'neon': '0 0 5px theme("colors.cyber-green"), 0 0 20px theme("colors.cyber-green")',
        'neon-blue': '0 0 5px theme("colors.cyber-blue"), 0 0 20px theme("colors.cyber-blue")',
        'neon-purple': '0 0 5px theme("colors.cyber-purple"), 0 0 20px theme("colors.cyber-purple")',
      },
    },
  },
  plugins: [],
}
