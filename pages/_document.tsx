import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="The best collection of Jesus memes the web has to offer!"
          />
          <meta property="og:site_name" content="JesusMemes.com" />
          <meta
            property="og:description"
            content="Jesus Memes, Find the Best of the Best."
          />
          <meta property="og:title" content="JesusMemes | The Dark Collection" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="JesusMemes | The Dark Collection" />
          <meta
            name="twitter:description"
            content="Jesus Memes, Find the Best of the Best."
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
