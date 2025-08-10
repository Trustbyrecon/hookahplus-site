export default function NotFound() {
  return (
    <main className="min-h-screen grid place-items-center bg-neutral-950 text-neutral-100 px-6">
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-semibold">Page not found</h1>
        <p className="mt-2 text-neutral-400">Let’s get you back to the lounge.</p>
        <a href="/" className="inline-block mt-6 rounded-xl bg-emerald-500 px-4 py-2 text-neutral-950">Home</a>
      </div>
    </main>
  )
}
