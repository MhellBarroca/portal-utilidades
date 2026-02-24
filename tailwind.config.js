/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    //"Procure classes CSS nesses arquivos aqui."
    //Se você não colocar isso, o Tailwind não gera os estilos.
    // comentario principal mhell (O tailwind.config.js define onde o Tailwind deve procurar 
    // as classes CSS e permite personalização do tema.)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

