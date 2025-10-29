import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./components/Providers";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Victoryo Antonis Liu",
  description:
    "I'm a passionate creator and self-taught tech enthusiast, living and working in New Zealand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://mma-analytics.up.railway.app/script.js" data-website-id="10f6d82c-0bb4-4036-a689-6d7f0492514b"></script>
        <title>Victoryo Antonis Liu</title>
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
