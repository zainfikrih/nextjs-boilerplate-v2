import { createGetInitialProps } from '@mantine/next';
import { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'
import Document from 'next/document';

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps

  render() {
    return (
      <Html lang="en" >
        <Head>
          <meta name="description" content="Asu" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
