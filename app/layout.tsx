import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { clx } from "./utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Talal Ahmad",
    template: "%s | Talal Ahmad",
  },
  description: "Developer and maker of things.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={clx(
        "bg-neutral-100 text-black dark:bg-neutral-950 dark:text-white",
      )}
    >
      <body className="mx-4 mb-40 mt-8 flex max-w-2xl flex-col antialiased md:flex-row lg:mx-auto">
        <main className="mt-6 flex min-w-0 flex-auto flex-col px-2 md:px-0">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
