import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Orquestra",
        short_name: "Orquestra",
        description: "Orquestra",
        theme_color: "#e47c34",
        icons: [
          {
            src: "icon-192.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  base: "https://contagem-orquestra.github.io/home/",
});
