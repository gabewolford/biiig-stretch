import './globals.css'

export const metadata = {
  title: 'Biiig Stretch Studio | Web Development',
  description: 'is a purposefully small design-oriented development studio based somewhere in the Pacific Wonderland.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
