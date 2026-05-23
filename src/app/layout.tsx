import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  weight: ["700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Astra Agency · Profit-First Meta Ads for SaaS and DTC",
  description:
    "Profit-first Meta Ads for SaaS and DTC brands spending $10K+/mo. Senior strategy plus AI execution. Free account audit, no pitch.",
  openGraph: {
    title: "Astra Agency · Profit-First Meta Ads for SaaS and DTC",
    description:
      "Senior strategy. AI speed. Profit you can scale. Free Meta Ads audit for SaaS and DTC brands spending $10K+/mo.",
  },
  twitter: {
    description:
      "Senior strategy. AI speed. Profit you can scale. Free Meta Ads audit for SaaS and DTC brands spending $10K+/mo.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${dmSans.variable}`}
      style={{ fontFamily: "var(--font-body), sans-serif" }}
    >
      <body>{children}</body>
    </html>
  );
}
