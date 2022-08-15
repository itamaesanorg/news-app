import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import PageLayout from '../bento/PageLayout'

export default function Home() {
  return (
    <PageLayout title='News App - Home'>
      <div className={styles.container}>
        <h1>Learning NextJS with ITAMAESAN</h1>
        <Link href='/about'>About</Link>
      </div>
    </PageLayout>
  )
}
