// @ts-check
import { defineConfig } from 'astro/config'

import cloudflare from '@astrojs/cloudflare'

import react from '@astrojs/react'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: cloudflare(),
  integrations: [react()],
})
