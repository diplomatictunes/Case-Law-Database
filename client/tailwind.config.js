module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      colors: {
        myblue: '#1D263B',
        myred: '#8E3B46',
        mygreen: '#129490', // Corrected the spelling from 'mygree' to 'mygreen'
        mycream: '#E7E5DF'
	},
      fontFamily: {
	fonts: ['Crimson Pro', 'Arial', 'Times New Roman'],
      }
    }
  },
  plugins: [],
}

