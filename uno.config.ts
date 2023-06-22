import {
  defineConfig,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'appear-t': 'motion-safe:animate-[appear-top_800ms_ease-in-out_forwards]',
    'appear-r': 'motion-safe:animate-[appear-right_800ms_ease-in-out_forwards]',
    'appear-b': 'motion-safe:animate-[appear-bottom_800ms_ease-in-out_forwards]',
    'appear-l': 'motion-safe:animate-[appear-left_800ms_ease-in-out_forwards]'
  },
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
        ibm_plex_sans: 'IBM Plex Sans:400,700',
        heebo: 'Heebo:400,700',
        raleway: 'Raleway:300',
        inter: 'Inter:400'
      }
    })
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()]
})
