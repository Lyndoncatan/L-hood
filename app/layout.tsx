import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import SiteHeader from "@/components/site-header"
import { CartProvider } from "@/lib/cart-context"
import { ThemeProvider } from "@/components/theme-provider"
import SiteFooter from "@/components/site-footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LHood - Premium Streetwear",
  description: "Discover premium streetwear that defines your identity",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <CartProvider>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <SiteFooter />
            </div>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'