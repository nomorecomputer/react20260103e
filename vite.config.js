import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // server:{open:true},
  base: process.env.NODE_ENV === "production" ? "/react20260103e/" : "/",
  plugins: [react()],
});
