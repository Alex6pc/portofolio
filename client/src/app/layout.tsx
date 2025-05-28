import "./globals.css";

import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { cn } from "@/lib/utils";
import { notFound } from "next/navigation";
import { Header, Footer } from "@/components/layout";
import { getGlobalPageData } from "@/data/loaders";
import { ScrollArrows } from "@/components/block-renderer/layout/scroll-arrows";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontHeading = Nunito({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "My Portfolio",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getGlobalPageData();
  if (!data) notFound();

  const { topNav, footer } = data.data;

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header data={topNav}/>
          {children}
          <Footer data={footer}/>
          <ScrollArrows />
          <ScrollArrows />
        </ThemeProvider>
      </body>
    </html>
  );
}
