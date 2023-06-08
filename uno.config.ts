import {
  defineConfig,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      prefix: ''
    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        roboto: 'Roboto:700',
        rubik: 'Rubik',
        ibm_plex_sans: 'IBM Plex Sans:400,700'
      }
    })
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()]
})
