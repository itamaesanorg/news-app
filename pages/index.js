import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <Head>
        <title>NewsApp - Home</title>
      </Head>

    <h1>Learning NextJS with ITAMAESAN</h1>
    <Link href='/about'>About</Link>

  <button onClick={() => router.push('/article/2')}>Go to Article 2</button>
  </div>
  )
}
