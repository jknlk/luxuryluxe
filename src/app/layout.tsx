import type { Metadata } from "next";
import { Playfair_Display, Inter, Alex_Brush } from "next/font/google";
import Preloader from "@/components/Preloader";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const alexBrush = Alex_Brush({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Lehenga Luxe | Bridal & Occasion Wear",
  description:
    "Lehenga Luxe — handcrafted bridal lehengas and occasion wear, where heritage craftsmanship meets modern luxury.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} ${alexBrush.variable} antialiased`}
      >
        <Preloader />
        {children}
      </body>
    </html>
  );
}
