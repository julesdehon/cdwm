import localFont from "next/font/local";
import "./globals.css";
import {Metadata, Viewport} from "next";
import AnimatedCursor from "react-animated-cursor";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Come Dine With Julia and Jules",
  description: "A website for submitting selections for the Come Dine With Me at The Westmark",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable}`}>
    {children}
    <AnimatedCursor
      innerSize={10}
      outerSize={30}
      color='88, 145, 188'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={2}
    />
    </body>
    </html>
  );
}
