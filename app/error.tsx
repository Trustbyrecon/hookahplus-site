'use client'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log for debugging or send to your tracking (e.g., Plausible/Sentry)
    console.error(error)
    // window.plausible?.('app_error', { props: { digest: error?.digest } })
  }, [error])

  return (
    <main className="min-h-screen grid place-items-center bg-neutral-950 text-neutral-100 px-6">
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-semibold">Something went wrong</h1>
        <p className="mt-2 text-neutral-400">
          {error?.message || 'Please try again.'}
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={reset}
            className="rounded-xl bg-emerald-500 px-4 py-2 text-neutral-950"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-xl border border-neutral-700 px-4 py-2 text-neutral-200 hover:border-emerald-500/70"
          >
            Home
          </a>
        </div>
      </div>
    </main>
  )
}
