import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap"
});

const siteUrl = "https://namanaggarwal76.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Naman Aggarwal | Developer Portfolio",
  description:
    "Minimal terminal-inspired portfolio for Naman Aggarwal, CS student, competitive programmer, and builder of systems, web, AI, and IoT projects.",
  authors: [{ name: "Naman Aggarwal", url: siteUrl }],
  creator: "Naman Aggarwal",
  keywords: [
    "Naman Aggarwal",
    "developer portfolio",
    "IIIT Hyderabad",
    "competitive programming",
    "React",
    "Next.js",
    "systems programming"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Naman Aggarwal | Developer Portfolio",
    description:
      "A dark, monospace, ASCII-first developer portfolio built with Next.js, Tailwind CSS, and Framer Motion.",
    siteName: "Naman Aggarwal",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Terminal-style portfolio preview for Naman Aggarwal"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Naman Aggarwal | Developer Portfolio",
    description:
      "ASCII-first developer portfolio with systems, AI, web, and competitive programming work.",
    images: ["/og-image.svg"]
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg"
  }
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#030303"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${mono.variable} bg-black font-mono text-ink antialiased`}>
        {children}
      </body>
    </html>
  );
}
