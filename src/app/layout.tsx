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
  title: "Astra Agency · AI-Powered Meta Ads for SaaS Companies",
  description:
    "We help SaaS companies spending $10K+/mo on Meta Ads lower CAC, fix funnel leaks, and turn ad spend into predictable MRR. Get a free account audit.",
  openGraph: {
    title: "AI Meta Ads for SaaS. Lower CAC. Scale MRR.",
    description:
      "Find the MRR your ad spend is leaking. Free Meta Ads audit for SaaS companies spending $5K+/mo.",
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
