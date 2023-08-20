import Head from 'next/head'
import { WagmiConfig, createConfig, mainnet, sepolia } from 'wagmi'
import { createPublicClient, http } from 'viem'


const config = createConfig({
  autoConnect: false,
  publicClient: createPublicClient({
    chain: sepolia,
    transport: http()
  }),
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>Voting dapp</title>
        <meta name="description" content="Week 4 encode weekend project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <WagmiConfig config={config}>
          {children}
        </WagmiConfig>
      </body>
    </html>
  )
}
