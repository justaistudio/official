import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./(shared)/Navbar"
import Footer from "./(shared)/Footer"

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JustAIstudio",
  description: "Lastest AI news, blogs, and hacks you'll ever needs",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={openSans.className} lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
