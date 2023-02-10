import React from 'react';
import Head from 'next/head'
import type { AppProps } from 'next/app'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '../styles/ThemeProvider';

export default function App({ Component, pageProps }: AppProps) {

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Teacher Karen&apos;s Class</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <ThemeProvider>
        <>
        <CssBaseline/>
        <Component {...pageProps} />
        </>
      </ThemeProvider>
    </>
  )
}
