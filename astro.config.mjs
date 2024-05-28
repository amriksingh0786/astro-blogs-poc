import db from '@astrojs/db';
import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  // 'hybrid' | 'svelte' | 'react' | 'vue' | 'solid
  integrations: [db()],
  adapter: vercel()
});