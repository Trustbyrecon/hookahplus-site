'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { QrCode, CreditCard, ShieldCheck, Clock, Wallet, MapPin, Gauge, Sparkles, Bot, BarChart3, CupSoda, CheckCircle } from 'lucide-react'

export default function Page() {
  const [submitted, setSubmitted] = useState(false)
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-emerald-400/30">
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500" />
            <span className="font-semibold tracking-tight">HookahPlus</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#demo" className="hover:text-white">Demo</a>
            <a href="#waitlist" className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-3 py-1 hover:border-emerald-500/70 hover:text-white">
              <Sparkles className="h-4 w-4" /> POS Waitlist
            </a>
          </nav>
        </div>
      </header>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(16,185,129,0.25),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
                The lounge operator stack
                <span className="block bg-gradient-to-br from-emerald-400 to-cyan-400 bg-clip-text text-transparent">built for revenue & reliability.</span>
              </motion.h1>
              <p className="mt-5 text-neutral-300 max-w-xl">
                HookahPlus powers QR preorders, flavor mix tracking, session-based POS, loyalty, and Reflex-driven reliability so your team serves faster—with fewer mistakes.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#preorder" className="rounded-xl bg-emerald-500 px-5 py-3 font-medium text-neutral-950 hover:bg-emerald-400">Start preorders</a>
                <a href="#waitlist" className="rounded-xl border border-neutral-700 px-5 py-3 font-medium hover:border-emerald-500/70">Join POS waitlist</a>
                <a href="#features" className="text-neutral-300 hover:text-white">See features →</a>
              </div>
              <div className="mt-6 flex items-center gap-5 text-xs text-neutral-400">
                <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-400"/>Reflex reliability layer</div>
                <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-emerald-400"/>Fast go‑live</div>
                <div className="flex items-center gap-2"><Wallet className="h-4 w-4 text-emerald-400"/>Stripe-ready</div>
              </div>
            </div>
            <motion.div initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} transition={{duration:0.6, delay:0.1}}
              className="relative rounded-2xl border border-neutral-800 bg-neutral-900 p-4 shadow-2xl">
              <div className="rounded-xl bg-neutral-950 p-5 border border-neutral-800">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Session #1294 · VIP Booth</div>
                  <div className="text-xs text-neutral-400">EDR 92% · SHR 84%</div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {[
                    {icon: CupSoda, label: 'Flavor Mix', sub: 'Blue Mist + Mint'},
                    {icon: QrCode, label: 'QR Preorder', sub: 'Paid · #ORD-9812'},
                    {icon: CreditCard, label: 'Stripe', sub: '$30 base + add‑ons'},
                  ].map((c, i) => (
                    <div key={i} className="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
                      <c.icon className="h-5 w-5 text-emerald-400"/>
                      <div className="mt-2 text-sm font-medium">{c.label}</div>
                      <div className="text-xs text-neutral-400">{c.sub}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 p-4 text-sm">
                  <div className="flex items-center gap-2"><BarChart3 className="h-4 w-4 text-emerald-400"/>Reflex Δ +0.18 after repair</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section id="features" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Everything you need to run modern lounges</h2>
        <p className="mt-2 text-neutral-400 max-w-2xl">From QR preorders to POS adapters, HookahPlus streamlines front-of-house while Recon Reflex protects reliability behind the scenes.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: QrCode, title: 'QR Preorders', desc: 'Guests order from their phones; orders flow to POS with Stripe metadata.' },
            { icon: CreditCard, title: 'Stripe Checkout', desc: 'Base session + add‑ons, deposits, promos, and referrals.' },
            { icon: CupSoda, title: 'Flavor Mix History', desc: 'Save favorite mixes, re‑order in one tap, recommend best‑sellers.' },
            { icon: Bot, title: 'Session Assistant', desc: 'Smart upsells and reminders prevent idle tables and cold coals.' },
            { icon: Gauge, title: 'Live Metrics', desc: 'Track EDR, Self‑Heal Rate, and MTTR‑AI for every session step.' },
            { icon: ShieldCheck, title: 'Reflex Reliability', desc: 'WakeLogic halts silent failures; GhostLog traces every action.' },
          ].map(({icon:Icon, title, desc}, i) => (
            <div key={i} className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
              <Icon className="h-5 w-5 text-emerald-400"/>
              <div className="mt-2 font-medium">{title}</div>
              <div className="text-sm text-neutral-300">{desc}</div>
            </div>
          ))}
        </div>
      </section>
      <section id="demo" className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold">See it in action</h3>
            <p className="mt-2 text-neutral-300">This short walkthrough shows QR preorder → Stripe payment → POS sync → Reflex repair in under a minute.</p>
            <div className="mt-5 flex gap-3">
              <a href="#preorder" className="rounded-xl bg-emerald-500 px-4 py-2 font-medium text-neutral-950 hover:bg-emerald-400">Try preorder</a>
              <a href="#waitlist" className="rounded-xl border border-neutral-700 px-4 py-2 hover:border-emerald-500/70">Join POS waitlist</a>
            </div>
          </div>
          <div className="aspect-video rounded-2xl border border-neutral-800 bg-neutral-900 flex items-center justify-center text-neutral-400">
            <span>Teaser video placeholder (15–30s)</span>
          </div>
        </div>
      </section>
      <section id="pricing" className="mx-auto max-w-7xl px-4 py-16">
        <h3 className="text-2xl font-semibold">Transparent pricing</h3>
        <p className="mt-2 text-neutral-300">Start with a base session; add premium flavors or VIP seating as you grow. Operator tiers available.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {[
            { name:'Starter Session', price:'$30', perks:['QR preorder','1 mix saved','Standard seating']},
            { name:'Premium Session', price:'$45', perks:['Everything in Starter','Unlimited mixes','VIP booth priority']},
            { name:'Operator Pro', price:'Custom', perks:['POS adapters','Analytics & Reflex','Priority support']}
          ].map((t, i) => (
            <div key={i} className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
              <div className="text-lg font-medium">{t.name}</div>
              <div className="mt-2 text-3xl font-semibold bg-gradient-to-br from-emerald-400 to-cyan-400 bg-clip-text text-transparent">{t.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-300">
                {t.perks.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 text-emerald-400"/>{p}</li>
                ))}
              </ul>
              <a href="#preorder" className="mt-6 block rounded-xl bg-emerald-500 px-4 py-2 text-center font-medium text-neutral-950 hover:bg-emerald-400">Select</a>
            </div>
          ))}
        </div>
      </section>
      <section id="preorder" className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
            <h4 className="text-xl font-semibold flex items-center gap-2"><CreditCard className="h-5 w-5 text-emerald-400"/> QR Preorder</h4>
            <p className="mt-2 text-neutral-300">Skip the line. Pay now, arrive when ready. We’ll have coals hot and your mix waiting.</p>
            <a href={process.env.NEXT_PUBLIC_STRIPE_CHECKOUT_URL || '#'} className="mt-4 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 font-medium text-neutral-950 hover:bg-emerald-400">
              Launch Stripe Checkout
            </a>
            <p className="mt-2 text-xs text-neutral-500">(Set NEXT_PUBLIC_STRIPE_CHECKOUT_URL in your environment.)</p>
          </div>
          <div id="waitlist" className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
            <h4 className="text-xl font-semibold flex items-center gap-2"><QrCode className="h-5 w-5 text-emerald-400"/> POS Adapter Waitlist</h4>
            {!submitted ? (
              <form name="pos-waitlist" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="mt-3 space-y-3" onSubmit={(e)=>{e.preventDefault(); setSubmitted(true);}}>
                <input type="hidden" name="form-name" value="pos-waitlist" />
                <input type="text" name="name" placeholder="Your name" required className="w-full rounded-xl bg-neutral-800/60 px-4 py-2 outline-none ring-1 ring-neutral-800 focus:ring-emerald-500/60" />
                <input type="email" name="email" placeholder="Email" required className="w-full rounded-xl bg-neutral-800/60 px-4 py-2 outline-none ring-1 ring-neutral-800 focus:ring-emerald-500/60" />
                <select name="pos" className="w-full rounded-xl bg-neutral-800/60 px-4 py-2 outline-none ring-1 ring-neutral-800 focus:ring-emerald-500/60">
                  <option value="">POS system</option>
                  <option>Clover</option>
                  <option>Toast</option>
                  <option>Square</option>
                </select>
                <button type="submit" className="w-full rounded-xl bg-emerald-500 px-4 py-2 font-medium text-neutral-950 hover:bg-emerald-400">Join waitlist</button>
                <p className="text-xs text-neutral-500">This form is Netlify-ready. Enable form handling in your site settings.</p>
              </form>
            ) : (
              <div className="mt-3 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm text-emerald-300">
                Thanks! You’re on the waitlist. We’ll reach out shortly.
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
          <h4 className="text-xl font-semibold flex items-center gap-2"><MapPin className="h-5 w-5 text-emerald-400"/> Pilot locations</h4>
          <p className="mt-2 text-neutral-300">We’re onboarding a handful of lounges in our pilot. Want in? Join the waitlist above.</p>
        </div>
      </section>
      <footer className="border-t border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-neutral-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} HookahPlus · All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
