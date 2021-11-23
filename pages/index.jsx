import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { Layout, Menu } from 'antd'
import Container from '../components/container'

const { Content } = Layout


export default function Home() {
  const [selected, setSelected] = useState('');
  return (
      <div className={styles.container}>
        <Head>
          <title>PROTO CMS</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Container>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <h1>Hello World!</h1>
            </Content>
          </Container>
        </main>
      </div>
  )
}
