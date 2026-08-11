import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "PS&E Bank | Private Banking & Wealth Platform",
  description:
    "Professional private banking and wealth platform: multi-user accounts, instant transfers, cards, Stripe top-ups, crypto portfolio tools, and live support.",
  openGraph: {
    title: "PS&E Bank | Private Banking & Wealth Platform",
    description:
      "Private accounts, real-time transfers, cards, wealth tools, and institutional-grade security framing.",
    url: "https://pse-bank-website.vercel.app",
    siteName: "PS&E Bank",
    type: "website",
  },
  icons: {
    icon: "/images/logo-app-icon.jpg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#070b14" />
      </head>
      <body
        style={{
          margin: 0,
          background: "#070b14",
          color: "#e2e8f0",
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
