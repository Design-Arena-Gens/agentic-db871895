"use client";
import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    setStatus('loading');
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error('Failed to send');
      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong');
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input name="name" placeholder="Name" required className="bg-white/5 border border-white/10 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-brand-500" />
      <input name="email" type="email" placeholder="Email" required className="bg-white/5 border border-white/10 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-brand-500" />
      <input name="company" placeholder="Company (optional)" className="md:col-span-2 bg-white/5 border border-white/10 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-brand-500" />
      <select name="service" className="bg-white/5 border border-white/10 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-brand-500">
        <option>3D Printing</option>
        <option>CAD Design & Modeling</option>
        <option>Customized PCB Manufacturing</option>
        <option>CNC Machining</option>
      </select>
      <input name="budget" placeholder="Budget Range" className="bg-white/5 border border-white/10 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-brand-500" />
      <textarea name="message" placeholder="Project details" required rows={5} className="md:col-span-2 bg-white/5 border border-white/10 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-brand-500" />
      <button disabled={status==='loading'} className="md:col-span-2 rounded-md bg-brand-500 px-5 py-3 font-medium hover:bg-brand-400 disabled:opacity-60">
        {status === 'loading' ? 'Sending...' : 'Request a Quote'}
      </button>
      {status === 'error' && <p className="md:col-span-2 text-red-400 text-sm">{error}</p>}
      {status === 'success' && <p className="md:col-span-2 text-emerald-400 text-sm">Thanks! We will be in touch shortly.</p>}
    </form>
  );
}
