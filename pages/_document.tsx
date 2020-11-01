import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Organize the 'bordel' in your mind as nice todos with BoardEL" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" sizes="192x192" href="/icon-192.png" />
          <link rel="apple-touch-icon" href="/icon-192.png" />
          <meta name="msapplication-square192x192logo" content="/icon-192.png"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>

        <noscript>You need to enable JavaScript to run this app. Sorry ¯\_(ツ)_/¯</noscript>
      </Html>
    )
  }
}

export default MyDocument
