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
        rubik: 'Rubik'
      }
    })
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()]
})
