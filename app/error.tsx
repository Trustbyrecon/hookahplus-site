'use client'
export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="min-h-screen grid place-items-center bg-neutral-950 text-neutral-100 px-6">
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-semibold">Something went wrong</h1>
        <button onClick={reset} className="mt-6 rounded-xl bg-emerald-500 px-4 py-2 text-neutral-950 rounded-xl">
          Try again
        </button>
      </div>
    </main>
  )
}
