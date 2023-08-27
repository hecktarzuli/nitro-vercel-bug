//https://nitro.unjs.io/config
export default defineNitroConfig({
    preset: 'vercel-static',
    prerender:{
        routes:['/about/']
    }
});
