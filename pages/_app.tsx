import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material'
import { Css, Refresh } from '@mui/icons-material';
import { lightTheme, darkTheme } from '../themes';
import { UIProvider } from '../context/ui';
import { EntriesProvider } from '../context/entries';
import { SnackbarProvider } from 'notistack';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export default function MyApp({ Component, pageProps }: AppProps) {

  const [currentTheme, setcurrentTheme] = useState(lightTheme)

  useEffect(() => {
    
    const cookieTheme = Cookies.get('theme') || 'light';
    const selectedTheme = cookieTheme === 'light'
      ? lightTheme
      : darkTheme

    setcurrentTheme(selectedTheme)
    
  }, [])
  

  return (
    <SnackbarProvider maxSnack={3}>
      <EntriesProvider>
        <UIProvider>
          <ThemeProvider theme={currentTheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </UIProvider>
      </EntriesProvider>
    </SnackbarProvider>
  )
}