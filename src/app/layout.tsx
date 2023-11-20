'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { Header } from '@/components/header'
import { useState } from 'react'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Anjun Dictionary Challenge',
//   description: 'A challenge by Anjun to developers to build a dictionary app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState('light')
  return (
    <html lang="en" className={theme}>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="A challenge by Anjun to developers to build a dictionary app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.svg" type="image/svg+xml" /> */}
      </head>
        {/* <link rel="preload" href={inter} as="font" crossOrigin="" /> */}
      <body className="dark:bg-zinc-950">
        <div className="w-[689px] mx-auto min-h-screen bg-white dark:bg-zinc-950">
          <Header theme={ theme } setTheme={ setTheme }/>
          <main className="mt-16">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
