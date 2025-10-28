import type React from "react"
import "@/app/globals.css"
import { LanguageProvider } from "@/lib/language-context"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hamza Akroubi | Développeur Java Full Stack",
  description:
    "Portfolio de Hamza Akroubi, Développeur Java Full Stack spécialisé en Spring Boot, Angular et développement web moderne",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script src="https://cdn.tailwindcss.com/3.3.2"></script>
      </head>
      <body className="bg-white">
        <LanguageProvider>
          {children}
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  )
}
