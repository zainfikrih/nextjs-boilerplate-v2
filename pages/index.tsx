import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import ApplicationContainer from '@/components/application-container.component'
import { useBearPersistStore, useBearStore } from '@/stores/bear.store'
import { useEffect, useState } from 'react'
import { Button } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'
import { Fade, Bounce } from "react-awesome-reveal";
import IProduct from '@/types/IProduct.type'
import ProductService from '@/services/product.service'
import { AxiosResponse } from 'axios'
import { type } from 'os'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const bears = useBearStore((state) => state.bears)
  const increasePopulation = useBearStore((state) => state.increase)

  // Persist store to state
  const [bearsPersistLoaded, setBearsPersistLoaded] = useState(0)
  const bearsPersist = useBearPersistStore((state) => state.bears)
  const increasePopulationPersist = useBearPersistStore((state) => state.increase)

  const [product, setProduct] = useState<IProduct>()

  useEffect(() => {
    setBearsPersistLoaded(bearsPersist)
    getProductAsync()
  }, [bearsPersist])

  function BearCounter() {
    return <h1>{bears} around here ...</h1>
  }

  function Controls() {
    return <Button leftIcon={<IconPlus size={14} />} onClick={() => increasePopulation(1)}>
      One up
    </Button>
  }

  function BearCounterPersist() {
    return <h1>{bearsPersistLoaded} around here ... <b>persist</b></h1>
  }

  function ControlsPersist() {
    return <Button leftIcon={<IconPlus size={14} />} onClick={() => increasePopulationPersist(1)}>
      One up
    </Button>
  }

  const getProductAsync = async () => {
    ProductService.getAll().then((response: AxiosResponse<IProduct>) => {
      console.log(response)
    }).catch((e: Error) => {
      console.log(e)
    })
  }

  return (
    <ApplicationContainer>
      <main className={styles.main}>
        <div className={styles.description}>
          <Fade>
            <p>
              Get started by editing&nbsp;
              <code className={styles.code}>pages/index.tsx</code>
            </p>
          </Fade>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <Bounce>
          <Controls />
          <BearCounter />
          <ControlsPersist />
          <BearCounterPersist />
        </Bounce>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main>
    </ApplicationContainer>
  )
}
