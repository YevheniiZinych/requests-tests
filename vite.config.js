import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/requests-tests",
  plugins: [react()],
  server: {
    port: 4040,
    open: true,
  },
});
