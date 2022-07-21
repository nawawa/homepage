import { createVuetify, ThemeDefinition } from 'vuetify';
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import colors from 'vuetify/lib/util/colors'

export default defineNuxtPlugin(nuxtApp => {
    
    const myCustomLightTheme: ThemeDefinition = {
        dark: false,
        colors: {
            font: `#151515`,
            background: `#F0EBEB`,
            secondary: `#747474`,
            white: `#F9F9F9`,
            yellow: `#FFF1BD`,
        }
    }
    const vuetify = createVuetify({
        theme: {
            defaultTheme: 'myCustomLightTheme',
            themes: {
              myCustomLightTheme
            }
        },
        components,
        directives,
        options: {
            customProperties: true
        }
    });

    nuxtApp.vueApp.use( vuetify );
});
