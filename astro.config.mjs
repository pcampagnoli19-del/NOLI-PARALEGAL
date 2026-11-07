import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://noliparalegal.com.br',
  trailingSlash: 'never',
  build: { format: 'file' },
});
