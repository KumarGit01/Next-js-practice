import '../styles/globals.css'
import Navbar from './Navbar'
import '../styles/layout.css'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps: { session, ...pageProps }, }) {
  
  
  return (
   

    <SessionProvider session={pageProps.session}>
<Navbar/>

    <Component {...pageProps} />

  </SessionProvider>
  )
}

export default MyApp
