import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html className="nightwind">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          {/* Meta Tags */}
          <meta name="title" content="Navneet" key="title" />
          <meta
            name="description"
            key="description"
            content="Navneet Portfolio"
          />
          <meta property="og:type" key="ogtype" content="website" />
          <meta property="og:url" key="ogurl" content="https://portfolio-wine-beta-76.vercel.app/" />
          <meta property="og:title" key="ogtitle" content="Navneet Portfolio" />
          <meta
            property="og:description"
            key="ogdescription"
            content="Navneet Portfolio Made in Next.JS"
          />
          <meta
            property="og:image"
            key="ogimage"
            content="https://portfolio-wine-beta-76.vercel.app/assets/img/user.jpg"
          />

          {/* <!-- Twitter --> */}
          <meta
            property="twitter:card"
            key="twittercard"
            content="summary_large_image"
          />
          <meta
            property="twitter:url"
            key="twitterurl"
            content="https://portfolio-wine-beta-76.vercel.app/"
          />
          <meta
            property="twitter:title"
            key="twittertitle"
            content="Navneet Portfolio"
          />
          <meta
            property="twitter:description"
            key="twitterdesc"
            content="Navneet Portfolio Made in Next.JS"
          />
          <meta
            property="twitter:image"
            key="twitterimage"
            content="https://portfolio-wine-beta-76.vercel.app/assets/img/user.jpg"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
