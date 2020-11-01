import Head from 'next/head'

import { Nav } from 'components/Nav'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-w-full min-h-screen bg-background">
        <Nav />

        <h1 className="py-20 text-5xl text-center text-font-primary">Next.js + Tailwind CSS</h1>
      </main>
    </>
  )
}

export default Home
