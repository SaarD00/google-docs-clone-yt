import '../styles/globals.css'
import { AppProps } from 'next/app'
import '@material-tailwind/react/tailwind.css'
import Head from 'next/head'
import '../styles.css'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
    
        <Head>
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
        </Head>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>

    </>
  )
}
