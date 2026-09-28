import type { Metadata } from "next";
import "./globals.css";
import FloatingHearts from "@/components/FloatingHearts";
import AudioPlayer from "@/components/AudioPlayer";
import CursorTrail from "@/components/CursorTrail";

export const metadata: Metadata = {
  title: "A Special Message Just for You ❤️",
  description: "I have something special to share with you... Open to view our romantic story.",
  openGraph: {
    title: "A Special Message Just for You ❤️",
    description: "An interactive romantic journey created with love.",
    url: "https://github.com/Abhishekasd/proposal",
    siteName: "Romantic Proposal",
    images: [
      {
        url: "/landing_bg.png",
        width: 1200,
        height: 630,
        alt: "Romantic Proposal",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A Special Message Just for You ❤️",
    description: "An interactive romantic journey created with love.",
    images: ["/landing_bg.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <CursorTrail />
        <FloatingHearts />
        <AudioPlayer />
        <main className="relative z-10 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
