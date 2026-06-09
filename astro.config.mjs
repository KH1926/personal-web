import { defineConfig } from "astro/config";

const owner = process.env.GITHUB_REPOSITORY_OWNER ?? "github-username";
const site = process.env.SITE_URL ?? `https://${owner}.github.io`;

export default defineConfig({
  site,
  base: "/personal-web/",
});
