import { SitemapStream, streamToPromise } from "sitemap";

const sitemap = new SitemapStream({
	hostname: "https://moyado.vercel.app",
});
sitemap.write({ url: "/", changefreq: "daily", priority: 0.9 });
// sitemap.write({ url: '/otra-pagina', changefreq: 'daily', priority: 0.8 });

sitemap.end();

streamToPromise(sitemap)
	.then((data) => {
		console.log("Sitemap generado correctamente", data.toString());
	})
	.catch((error) => {
		console.error("Error al generar el sitemap", error);
	});
