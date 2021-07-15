import Head from 'next/head'
import PropTypes from 'prop-types'
import GlobalStyles from 'styles/GlobalStyles'
import Layout from 'components/Layout'

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>My Website</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=2"
      />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="theme-color" content="#fffff" />
      <meta name="description" content="My website description." key="description" />
    </Head>
    <GlobalStyles />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
)

App.propTypes = {
  Component: PropTypes.func.isRequired,
  // Page props will be unknown
  // eslint-disable-next-line
  pageProps: PropTypes.object,
}

export default App
