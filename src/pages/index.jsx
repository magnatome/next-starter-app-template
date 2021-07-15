import Head from 'next/head'
import tw from 'twin.macro'

const Card = tw.a`
  border
  m-4
  p-6
  rounded
  shadow-sm
  transition-colors
  hover:(
    text-blue-500
  )
`

const HomePage = () => (
  <div tw="flex flex-col items-center justify-center h-screen min-h-screen">
    <Head>
      <title>My Home Page</title>
    </Head>

    <main tw="flex flex-col flex-1 items-center justify-center">
      <h1 tw="text-4xl sm:text-6xl">
        Welcome to{' '}
        <a href="https://nextjs.org" tw="text-blue-600">
          Next.js!
        </a>
      </h1>

      <p tw="text-xl my-4">
        Get started by editing{' '}
        <code tw="bg-yellow-50 p-2 text-base font-family[Menlo, Moncao]">
          pages/index.js
        </code>
      </p>

      <div tw="grid mt-12 max-w-screen-lg sm:grid-cols-2">
        <Card href="https://nextjs.org/docs">
          <h2 tw="mb-4 text-2xl">Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </Card>

        <Card href="https://nextjs.org/learn">
          <h2 tw="mb-4 text-2xl">Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </Card>

        <Card href="https://github.com/vercel/next.js/tree/master/examples">
          <h2 tw="mb-4 text-2xl">Examples &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </Card>

        <Card href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
          <h2 tw="mb-4 text-2xl">Deploy &rarr;</h2>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </Card>
      </div>
    </main>

    <footer tw="border-t flex justify-center items-center h-24 w-full">
      <a
        href="https://github.com/magnatome/next-starter-template"
        target="_blank"
        rel="noopener noreferrer"
        tw="text-blue-600"
      >
        Created by Magnatome
      </a>
    </footer>
  </div>
)

export default HomePage
