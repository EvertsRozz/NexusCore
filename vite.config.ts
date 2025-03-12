import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  root: process.cwd(),
  plugins: [react(), tailwindcss()],
  base: "./",
  build: {
    outDir: path.resolve(process.cwd(), "dist/react"),
  },
});
