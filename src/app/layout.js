import './globals.css'
import { Hanken_Grotesk } from 'next/font/google'

export const metadata = {
  title: 'Biiig Stretch Studio | Web Development',
  description: 'A purposefully small design-oriented development studio based in the heart of the Pacific Wonderland.',
}

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={hanken.className}>
      <body>
        {children}
      </body>
    </html>
  )
}
