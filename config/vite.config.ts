import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const projectRoot = path.resolve(__dirname, "..");

export default defineConfig({
  root: projectRoot,
  plugins: [react()],
  base: "./",
  build: {
    outDir: path.resolve(projectRoot, "dist/react"),
  },
});
