import './globals.css'

export const metadata = {
  title: 'Biiig Stretch Studios',
  description: 'A design-oriented digital web studio.',
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
