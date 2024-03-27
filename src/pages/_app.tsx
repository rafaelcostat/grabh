import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { appWithTranslation } from 'next-i18next'
import '../../node_modules/flag-icons/css/flag-icons.min.css'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default appWithTranslation(App)
