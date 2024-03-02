// https://nuxt.com/docs/api/configuration/nuxt-config
import type { NuxtConfig } from "@nuxt/types";

const config: NuxtConfig = {
  devtools: { enabled: true },
  app: {
    baseURL: "/", // defaulted by nuxt
    // Look into HeadAndMeta.vue for the rest
    head: {
      htmlAttrs: {
        lang: "en",
        dir: "ltr",
      },
      title: "Wanderlust",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
        {
          name: "og:title",
          content: "Wanderlust - Turpal",
        },
        {
          hid: "description",
          name: "description",
          content: "Explore UAE's Top Tours & Activities",
        },
        {
          name: "og:description",
          content: "Explore UAE's Top Tours & Activities",
        },
        { name: "og:site_name", content: "Wanderlust - Turpal" },
        {
          name: "viewport",
          content:
            "width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover",
        },
      ],
    },
  },

  buildModules: ["@nuxt/typescript-build"],
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  imports: {
    dirs: [
      // Scan top-level modules
      "composables",
      // ... or scan modules nested one level deep with a specific name and file extension
      "composables/*/index.{ts,js,mjs,mts}",
      // ... or scan all modules within given directory
      "composables/**",
    ],
  },
};

export default config;