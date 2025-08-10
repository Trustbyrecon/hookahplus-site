'use client'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

declare global {
  interface Window { plausible?: (event: string, opts?: any) => void }
}

export default function Plausible() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN
  const pathname = usePathname()

  // fire a pageview on client-side route changes
  useEffect(() => {
    if (!domain || typeof window === 'undefined' || !window.plausible) return
    window.plausible('pageview')
    if (pathname === '/thanks') window.plausible('waitlist_submit')
  }, [pathname, domain])

  return null
}
