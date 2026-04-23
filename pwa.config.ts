import { defineConfig } from '@/types/config';

export default defineConfig({
  manifest: {
    name: "ផ្ទះរង្សី — RANGSEYhome",
    short_name: "RANGSEYhome",
    description: "Personal blog & portfolio by Rangsey P. HENG",
    theme_color: "#55c489",
    background_color: "#efefef",
    display: "standalone",
    scope: "/",
    start_url: "/",
  },
  origin: "https://rangseyhome.insightune.com", // Your custom domain
  pwa: {
    logs: true,
  },
});
