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

const title = "BASE｜今吉稜太 — SEOライティング・EC運営・アパレル企画";
const description =
  "今吉稜太のポートフォリオ・活動拠点「BASE」。約10年のアパレル販売・店舗運営経験をもとに、SEOライティング、EC運営・業務改善、アパレル企画・コンサルに取り組んでいます。プロフィール、経験・制作、note、お問い合わせをご覧いただけます。";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "今吉 稜太" }],
  openGraph: {
    title,
    description,
    siteName: "BASE",
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
