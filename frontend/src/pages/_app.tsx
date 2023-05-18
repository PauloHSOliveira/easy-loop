import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import theme from '@/styles/theme'
import { RelayEnvironmentProvider } from 'react-relay'
import environment from '@/service/relay'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </RelayEnvironmentProvider>
  )
}
