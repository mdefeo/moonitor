import Head from 'next/head'
import Image from 'next/image'
import CssBaseline from '@mui/material/CssBaseline';
import { Inter } from 'next/font/google'
import theme from 'Data/theme';
import { ThemeProvider } from '@mui/material/styles';
import styles from '@styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Moonitor</title>
        <meta name="description" content="The activity and mood monitoring app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <main className={styles.main}>
        <div className={styles.description}>
              <Image
                src="/img/moonitor-logo.png"
                alt="Welcome to Moonitor"
                className={styles.logo}
                width={691}
                height={1080}
                priority
              />
        </div>
      </main>
      </ThemeProvider>

    </>
  )
}

