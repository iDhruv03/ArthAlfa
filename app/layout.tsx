import Script from "next/script";
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// ✅ metadata without viewport
export const metadata: Metadata = {
  title: 'ArthAlfa - Your Trusted Partner',
  description: 'Professional services and solutions for your business needs',
  keywords: 'business, services, solutions, professional, consulting',
  authors: [{ name: 'ArthAlfa Team' }],
}

// ✅ separate viewport export
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Script id="apollo-tracker" strategy="afterInteractive">
{`
function initApollo(){
  var n=Math.random().toString(36).substring(7),
      o=document.createElement("script");
  o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n;
  o.async=true;
  o.defer=true;
  o.onload=function(){
    window.trackingFunctions.onLoad({
      appId:"6a3fa3fd165814001827f36f"
    });
  };
  document.head.appendChild(o);
}
initApollo();
`}
</Script>
      </body>
    </html>
  )
}
