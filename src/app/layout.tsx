import type { Metadata } from 'next';
import { DM_Sans, Space_Grotesk } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'EasyPage — Clarity for every brain 🧠',
  description: 'The AI-Powered Cognitive Bridge for Web Accessibility. Make any webpage accessible for neurodivergent users with AI-powered features.',
  keywords: ['accessibility', 'neurodivergent', 'dyslexia', 'ADHD', 'autism', 'chrome extension', 'AI'],
  authors: [{ name: 'EasyPage Team' }],
  openGraph: {
    title: 'EasyPage — Clarity for every brain',
    description: 'AI-powered Chrome extension making the web accessible for neurodivergent users',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
