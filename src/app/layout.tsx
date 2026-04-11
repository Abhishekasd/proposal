import type { Metadata } from "next";
import "./globals.css";
import FloatingHearts from "@/components/FloatingHearts";
import AudioPlayer from "@/components/AudioPlayer";

export const metadata: Metadata = {
  title: "A Special Message for You",
  description: "A romantic interactive experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <FloatingHearts />
        <AudioPlayer />
        <main>{children}</main>
      </body>
    </html>
  );
}
