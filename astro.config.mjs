import { defineConfig } from 'astro/config'

import image from '@astrojs/image'
import alpinejs from '@astrojs/alpinejs'
import unocss from 'unocss/astro'

export default defineConfig({
  site: 'https://dreisss.github.io',
  base: '/rkt-boracodar',
  integrations: [
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    }),
    alpinejs(),
    unocss({
      injectReset: true
    })
  ]
})
