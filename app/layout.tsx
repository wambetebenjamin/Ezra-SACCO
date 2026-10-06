import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ezra SACCO | Save together. Grow together.',
  description: 'Licensed Kenyan SACCO savings, loans and member investment.',
  openGraph: { title: 'Ezra SACCO', description: 'A trusted financial partner for Kenyan members.', type: 'website' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en-KE"><body>{children}</body></html>
}
