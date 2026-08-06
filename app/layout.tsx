import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Background from "@/components/Background";
import Frame from "@/components/Frame";
import ThemeToggle from "@/components/ThemeToggle";
import SiteHeader from "@/components/SiteHeader";
import SiteNav from "@/components/SiteNav";
import EnterView from "@/components/EnterView";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ash — Software Developer",
  description: "Portfolio of Ash, Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <ThemeProvider>
          <EnterView />
          <Background />
          <Frame />
          <div className="content">
            <SiteHeader />
            <SiteNav />
            <ThemeToggle />
            <main className="content_inner">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
