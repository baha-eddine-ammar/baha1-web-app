import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { copyFileSync } from "fs";
import { join } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    {
      name: "copy-404",
      closeBundle() {
        // Copy index.html to 404.html for GitHub Pages SPA routing
        const distPath = join(process.cwd(), "dist");
        try {
          copyFileSync(
            join(distPath, "index.html"),
            join(distPath, "404.html")
          );
        } catch (err) {
          console.warn("Failed to copy 404.html:", err);
        }
      },
    },
  ],
  base: "/baha1-web-app/",
  server: {
    host: true,
    port: 5173
  }
});
