import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/static";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    redirects: {
        "/": "/career experience/",
    },
    output: "static",
    adapter: vercel({
        analytics: true,
    }),
    site: "https://astro.kalenwallin.com",
    integrations: [react()],
});
