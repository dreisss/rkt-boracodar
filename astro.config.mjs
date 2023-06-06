import { defineConfig } from 'astro/config'

import unocss from 'unocss/astro'
import image from '@astrojs/image'

export default defineConfig({
  site: 'https://dreisss.github.io',
  base: '/rkt-boracodar',
  integrations: [
    unocss({
      injectReset: true
    }),
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    })
  ]
})
