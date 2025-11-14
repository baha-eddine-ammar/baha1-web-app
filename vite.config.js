import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  //base: "/Baha-eddine-Ammar-WA-V2/",
  base: process.env.VITE_BASE_PATH || "/Baha-eddine-Ammar-WA-V2",
});
