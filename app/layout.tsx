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

        {/* GA4 bootstrap */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
            <Analytics />
          </>
        )}
      </body>
    </html>
  )
}
