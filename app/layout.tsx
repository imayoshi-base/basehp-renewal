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

const title = "BASE｜福岡発・全国対応のアパレル・リユースDX支援｜今吉稜太";
const description =
  "福岡県を拠点に、アパレル・リユース企業のDX・業務改善を支援するBASE。東京で培った販売・店舗運営の経験を活かし、福岡での対面相談・支援と全国オンラインに対応。業務フロー、EC・店舗運営、Web・コンテンツの課題を整理します。";

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
