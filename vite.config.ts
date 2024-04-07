import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { remixDevTools } from "remix-development-tools";

export default defineConfig({
  plugins: [
    remixCloudflareDevProxy(),
    remixDevTools(),
    remix(),
    tsconfigPaths(),
  ],
});
