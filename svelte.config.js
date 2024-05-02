// svelte.config.js
import adapter from '@sveltejs/adapter-static';

const config = {
    kit: {
        // Definindo o adaptador como static
        adapter: adapter(),

        // Se você estiver hospedando sua aplicação em um subdiretório, 
        // você pode especificá-lo aqui (opcional)
        // paths: {
        //     base: '/seu-subdiretorio'
        // },
    }
};

export default config;