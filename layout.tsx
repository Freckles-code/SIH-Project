import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { KisanProvider } from "@/lib/kisan/store"
import { Navbar } from "@/components/kisan/navbar"
import { MobileNav } from "@/components/kisan/mobile-nav"
import { Toaster } from "@/components/ui/sonner"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    template: "%s · KisanQueue",
    default: "KisanQueue – Smart Procurement Token & Queue Management",
  },
  description:
    "Book your procurement slot, get a digital token, track your live queue and payment status — without waiting all day at the centre.",
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#2f8f4e",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <KisanProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 pb-24 md:pb-0">{children}</main>
            <MobileNav />
          </div>
          <Toaster position="top-center" richColors />
        </KisanProvider>
        <Analytics />
      </body>
    </html>
  )
}
