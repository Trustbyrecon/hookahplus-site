export const metadata = {
  title: 'Thanks — HookahPlus',
  description: 'Your submission was received.',
};

export default function ThanksPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-semibold">Thanks! 🎉</h1>
        <p className="mt-3 text-neutral-300">
          You’re on the waitlist. We’ll reach out shortly with next steps.
        </p>
        <a href="/" className="inline-block mt-6 rounded-xl bg-emerald-500 px-4 py-2 font-medium text-neutral-950 hover:bg-emerald-400">
          Back to home
        </a>
      </div>
    </main>
  );
}
