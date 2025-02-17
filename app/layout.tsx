import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PotaPress - Basketbol Haberleri ve Güncel Gelişmeler",
  description:
    "Türkiye'nin öncü basketbol haber platformu. NBA, EuroLeague, BSL ve daha fazlası PotaPress'te!",
  metadataBase: new URL("https://potapress.com"),
  keywords: [
    "basketbol haberleri",
    "NBA",
    "EuroLeague",
    "BSL",
    "Türk basketbolu",
    "basketbol",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Google Search Console kodunuzu buraya ekleyin
  },
  alternates: {
    canonical: "https://potapress.com",
  },
  openGraph: {
    title: "PotaPress - Basketbol Haberleri",
    description: "Türkiye'nin öncü basketbol haber platformu",
    url: "https://potapress.com",
    siteName: "PotaPress",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PotaPress - Basketbol Haberleri",
    description: "Türkiye'nin öncü basketbol haber platformu",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-100/60 text-neutral-900`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
