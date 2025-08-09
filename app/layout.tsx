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
