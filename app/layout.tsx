import type { Metadata } from 'next'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hookahplus.net'

export const metadata: Metadata = {
  title: 'HookahPlus — The lounge operator stack',
  description: 'QR preorders, flavor mix tracking, session-based POS, loyalty, and Reflex reliability.',
  metadataBase: new URL(siteUrl),
  alternates: { canonical: '/' },
  openGraph: { type: 'website', url: siteUrl, title: 'HookahPlus — The lounge operator stack', description: 'Built for revenue & reliability.', siteName: 'HookahPlus' },
  twitter: { card: 'summary_large_image', title: 'HookahPlus — The lounge operator stack', description: 'Built for revenue & reliability.' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>)
}
// ...existing imports
import Analytics from '@/components/Analytics'

export const metadata = {
  metadataBase: new URL('https://hookahplus.net'),
  title: 'HookahPlus — The lounge operator stack',
  description: 'QR preorders, session-based POS, and Reflex reliability.',
  openGraph: {
    title: 'HookahPlus — The lounge operator stack',
    description: 'QR preorders, session-based POS, and Reflex reliability.',
    url: 'https://hookahplus.net',
    siteName: 'HookahPlus',
    images: ['/og.png'], // put image in /public
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HookahPlus — The lounge operator stack',
    description: 'QR preorders, session-based POS, and Reflex reliability.',
    images: ['/og.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}

       import Plausible from '@/components/Plausible'

export const metadata = {
  // … your existing metadata (keep og/tweet images)
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN
  return (
    <html lang="en">
      <body>
        {children}

        {/* Plausible */}
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
