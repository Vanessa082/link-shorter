import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/theme/theme.provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const appName = "Minxx";
const appDescription = "Simplify and optimize your links with our powerful link shortener. Track performance, manage custom URLs, and share with ease—all in one platform. Perfect for social media, marketing, and analytics."

export const metadata: Metadata = {
  title: {
    template: `%s | ${appName}`,
    default: appName
  },

  description: appDescription,
  // metadataBase: new URL(process.env.FRONT_END_URL!),

  openGraph: {
    type: "website",
    siteName: "appName",
    description: appDescription,
    title: {
      template: `%s | ${appName}`,
      default: appName
    },
  },

  twitter: {
    card: "summary",
    creator: "@wah_vanessa",
    description: appDescription,
    title: {
      template: `%s | ${appName}`,
      default: appName,
    },
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: `%s | ${appName}`,
  },

  authors: [{
    url: "https://github.com/vanessa082",
    name: "Wah Vanessa",
  }],

  keywords: [
    "link shortener", "URL shortener", "track links", "analytics", "custom URLs", "shorten links", "free link shortener", "link management"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
