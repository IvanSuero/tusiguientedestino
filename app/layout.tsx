import './globals.css'
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from './components/header'
import Footer from './components/footer'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tu Siguiente Destino",
  description: "Encuentra tu próximo destino de viaje",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <Header />
        <main className='min-h-screen'>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
