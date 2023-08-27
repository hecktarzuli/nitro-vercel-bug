//https://nitro.unjs.io/config
export default defineNitroConfig({
    preset: 'vercel-static',
    prerender:{
        crawlLinks: true,
    }
});
