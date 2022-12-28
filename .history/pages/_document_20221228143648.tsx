import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-gray-50 bg-opacity-5 md:bg-gray-100 md:bg-opacity-100'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
