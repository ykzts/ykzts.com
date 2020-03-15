import { MDXProviderComponentsProp, MDXProvider } from '@mdx-js/react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import React, { FC } from 'react'
import ExternalLink from '../components/ExternalLink'
import Layout from '../components/Layout'

const mdxComponents: MDXProviderComponentsProp = {
  a: ExternalLink
}

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <MDXProvider components={mdxComponents}>
        <DefaultSeo titleTemplate="%s | ykzts.com" />

        <Head>
          <link
            href="https://www.gravatar.com/avatar/b9025074d487cd0328f1dc816e5ac50a?s=256"
            rel="icon"
          />
        </Head>

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>

      <style global jsx>{`
        * {
          border: 0;
          font: inherit;
          font-size: 100%;
          margin: 0;
          padding: 0;
          vertical-align: baseline;
        }

        *,
        *::before,
        *::after {
          box-sizing: inherit;
        }

        html {
          box-sizing: border-box;
        }

        html {
          font-size: 18pt;
          overflow-x: hidden;
        }

        @media (max-width: 1920px) {
          html {
            font-size: 13pt;
          }
        }

        @media (max-width: 1152px) {
          html {
            font-size: 14pt;
          }
        }

        @media (max-width: 736px) {
          html {
            font-size: 12pt;
          }
        }

        @media (max-width: 480px) {
          html {
            font-size: 11pt;
          }
        }

        body {
          background-color: #fff;
          color: #000;
          font-family: Source Sans Pro, Helvetica, Noto Sans JP, sans-serif;
          font-size: 1rem;
          font-weight: 300;
          letter-spacing: 0.0375rem;
          line-height: 2;
          overflow-x: hidden;
          -webkit-text-size-adjust: none;
        }

        @media (max-width: 480px) {
          html,
          body {
            min-width: 320px;
          }
        }

        a {
          color: #000;
          border-bottom: dotted 1px;
          text-decoration: none;
          transition: border-bottom-color 0.25s ease-in-out;
        }

        a:hover {
          border-bottom-color: transparent;
          text-decoration: none;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: #000;
          font-family: Raleway, Helvetica, Noto Sans JP, sans-serif;
          font-weight: 600;
          letter-spacing: 0.175em;
          line-height: 1.75;
          margin: 0 0 1.5rem 0;
          text-transform: uppercase;
        }

        h1 a,
        h2 a,
        h3 a,
        h4 a,
        h5 a,
        h6 a {
          color: inherit;
          text-decoration: none;
        }

        h1 {
          font-family: Source Sans Pro, Helvetica, sans-serif;
          font-size: 5rem;
          font-weight: 700;
          letter-spacing: -0.05em;
          line-height: 1.1;
          margin: 0 0 1.5rem 0;
          text-transform: none;
        }

        h2 {
          font-size: 1.25rem;
          font-weight: 800;
        }

        h3 {
          font-size: 0.875rem;
        }

        h4 {
          font-size: 0.875rem;
        }

        h5 {
          font-size: 0.75rem;
        }

        h6 {
          font-size: 0.625rem;
        }

        @media (max-width: 736px) {
          h1 {
            font-size: 4.5rem;
            line-height: 1.1;
          }

          h2 {
            font-size: 1.25rem;
            line-height: 1.7;
          }

          h3 {
            font-size: 0.9rem;
          }

          h4 {
            font-size: 0.75rem;
          }

          h5 {
            font-size: 0.675rem;
          }
        }

        @media (max-width: 360px) {
          h1 {
            font-size: 3.75rem;
          }

          h2 {
            font-size: 1.125rem;
          }

          h3 {
            font-size: 0.8rem;
          }

          h4 {
            font-size: 0.675rem;
          }

          h5 {
            font-size: 0.675rem;
          }
        }

        ul {
          list-style: disc;
          margin: 0 0 2rem 0;
          padding-left: 1rem;
        }

        ul li {
          padding-left: 0.325rem;
        }
      `}</style>
    </>
  )
}

export default MyApp
