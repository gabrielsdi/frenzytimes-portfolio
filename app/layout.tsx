import type { Metadata } from "next";
import { Press_Start_2P, Inter } from "next/font/google";
import "./globals.css";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "frenzytimes — Retro PSX Horror Games",
  description:
    "Indie game developer specializing in retro PSX-style horror games. Explore survival horror experiences inspired by the golden age of PlayStation.",
  keywords: [
    "frenzytimes",
    "indie game developer",
    "PSX horror",
    "retro games",
    "survival horror",
    "itch.io",
  ],
  openGraph: {
    title: "frenzytimes — Retro PSX Horror Games",
    description:
      "Indie game developer specializing in retro PSX-style horror games.",
    type: "website",
    url: "https://frenzytimes.itch.io/",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@frenzytimes91",
    title: "frenzytimes — Retro PSX Horror Games",
    description:
      "Indie game developer specializing in retro PSX-style horror games.",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pressStart2P.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
