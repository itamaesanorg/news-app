import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>

  <Head>
    <title>NewsApp</title>
    <meta name="description" content="News App by ITAMAESAN" />
    <link rel="icon" href="/favicon.ico" />
  </Head>

  <header>📰 newsapi</header>
  <Component {...pageProps} />
  </>
}

export default MyApp
