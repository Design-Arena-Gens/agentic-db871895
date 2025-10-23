import type { Metadata } from 'next';
import './globals.css';
import { Inter, Outfit } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: 'AxiomFab - 3D Printing, CAD, PCB & CNC Services',
  description: 'Premium 3D printing, CAD design & modeling, customized PCB manufacturing, and precision CNC machining services.',
  openGraph: {
    title: 'AxiomFab - 3D Services',
    description: '3D printing, CAD design, PCB manufacturing, CNC machining.',
    url: 'https://agentic-db871895.vercel.app',
    siteName: 'AxiomFab',
    locale: 'en_US',
    type: 'website'
  },
  metadataBase: new URL('https://agentic-db871895.vercel.app'),
  twitter: {
    card: 'summary_large_image',
    title: 'AxiomFab - 3D Services',
    description: '3D printing, CAD design, PCB manufacturing, CNC machining.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur bg-black/20">
          <nav className="container flex h-16 items-center justify-between">
            <div className="font-display text-xl">Axiom<span className="text-brand-400">Fab</span></div>
            <div className="hidden md:flex gap-8 text-sm text-white/80">
              <a href="#services" className="hover:text-white">Services</a>
              <a href="#process" className="hover:text-white">Process</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
            <a href="#contact" className="rounded-md bg-brand-500 px-4 py-2 text-sm font-medium hover:bg-brand-400">Get Quote</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="border-t border-white/10 mt-20">
          <div className="container py-10 text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>© {new Date().getFullYear()} AxiomFab. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
