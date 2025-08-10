import type { Metadata } from 'next'
import './globals.css'
import Plausible from '../components/Plausible'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hookahplus.net'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'HookahPlus — The lounge operator stack',
  description: 'QR preorders, session-based POS, and Reflex reliability.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'HookahPlus — The lounge operator stack',
    description: 'QR preorders, session-based POS, and Reflex reliability.',
    url: siteUrl,
    siteName: 'HookahPlus',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HookahPlus — The lounge operator stack',
    description: 'QR preorders, session-based POS, and Reflex reliability.',
    images: ['/og.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN
  return (
    <html lang="en">
      <body>
        {children}
        {domain && (
          <>
            <script
              defer
              data-domain={domain}
              src="https://plausible.io/js/script.js"
            />
            <Plausible />
          </>
        )}
      </body>
    </html>
  )
}
