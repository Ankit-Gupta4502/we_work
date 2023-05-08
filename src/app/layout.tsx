import Header from './components/Header'
import './globals.scss'
import { Figtree } from 'next/font/google'
import Theme from "./theme"
const figtree = Figtree({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800'] })

export const metadata = {
  title: 'WeWork Salesforce',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={figtree.className}>
        <Theme>
          <Header />
          {children}
        </Theme>
      </body>
    </html>
  )
}