import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Layout from "../components/Layout"
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true)

  const router = useRouter()

  useEffect(() => {
    router.isReady && setIsLoading(false)
  }, [])

  return <Layout>
  {isLoading ? <>loading...</> : <Component {...pageProps} />}
  </Layout>
}
