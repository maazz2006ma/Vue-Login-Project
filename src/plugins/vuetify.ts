
import { createVuetify, type VuetifyOptions } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
// import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
import * as labsComponents from 'vuetify/labs/components';
// Translations provided by Vuetify
import { en } from 'vuetify/locale';

// Misc

// Styles
import 'vuetify/styles';



let vuetifyConfig: VuetifyOptions = {
  
  locale: {
    locale: 'en',
    fallback: 'en',
    messages: { en },
  },
  theme: {
    defaultTheme: 'light',
  },
};
  vuetifyConfig = {
    components: { components, labsComponents },
    directives,
    ...vuetifyConfig,
  };

export default createVuetify(vuetifyConfig);

// Export for test.
export { components, directives };