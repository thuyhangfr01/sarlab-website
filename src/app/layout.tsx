import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import './globals.css';
import cn from '@/lib/utils';
import SideNavbar from '@/components/SideNavbar';

const montserrat = Montserrat({ subsets: ['vietnamese'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          montserrat.className,
          'min-h-screen w-full bg-white text-black  flex',
        )}
      >
        {/* sidebar */}
        <SideNavbar />
        {/* main page */}
        <div className="p-8">{children}</div>
      </body>
    </html>
  );
}
