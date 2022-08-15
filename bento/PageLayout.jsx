import Head from 'next/head';
export default function PageLayout({ children, title = 'NewsApp' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="News App by ITAMAESAN" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        📰 newsapi
      </header>
      <main>
        {children}
      </main>
      <style jsx>
        {`
          header {
            padding: 20px;
          }
        `}
      </style>
    </>
  )
}