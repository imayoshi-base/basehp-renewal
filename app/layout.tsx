import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "BASE｜アパレル・リユース業界のDX・業務改善支援｜今吉稜太";
const description =
  "アパレル・リユース企業向けに、BASEの今吉稜太がDX・業務改善を支援。販売・店舗運営・ECの経験をもとに、現場とシステムの間の課題を整理し、EC・店舗運営、Web・コンテンツまで支援します。";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.basehp.com"),
  alternates: { canonical: "/" },
  title,
  description,
  authors: [{ name: "今吉 稜太" }],
  openGraph: {
    title,
    description,
    siteName: "BASE",
    url: "https://www.basehp.com/",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
