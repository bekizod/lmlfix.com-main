import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer1/Footer';
import FloatingNavDemo from "@/components/FloatingNavDemo";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LMLFix',
  description: 'LMLFix',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        <FloatingNavDemo />
        {children}
        <div className="pt-5">
        <Footer />
        </div>
      </body>
    </html>
  );
}
