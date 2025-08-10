'use client'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function Analytics() {
  const id = process.env.NEXT_PUBLIC_GA_ID
  const pathname = usePathname()

  useEffect(() => {
    if (!id || typeof window === 'undefined') return
    // pageview on route change
    window.gtag?.('config', id, { page_path: pathname })
    // conversion when the user lands on /thanks
    if (pathname === '/thanks') {
      window.gtag?.('event', 'waitlist_submit', { value: 1 })
    }
  }, [pathname, id])

  return null
}
