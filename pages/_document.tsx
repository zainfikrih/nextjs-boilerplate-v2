import { createGetInitialProps } from '@mantine/next';
import { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'
import Document from 'next/document';

const APP_NAME = 'Next.js App'
const APP_DESCRIPTION = 'Built with Next.js 13'
const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps

  render() {
    return (
      <Html lang="en" >
        <Head>
          <meta name='application-name' content={APP_NAME} />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content={APP_NAME} />
          <meta name='description' content={APP_DESCRIPTION} />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <link rel="manifest" href="/manifest.webmanifest.json" />
          <link rel="apple-touch-icon" href="/favicon.ico"></link>
          {/* <meta name="theme-color" content="#fff" /> */}
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
