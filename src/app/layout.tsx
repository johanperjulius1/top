import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "@/components/menu";


// Static data fetching at build time
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'CasinoSisters.com',
  description: 'CasinoSisters.com - the number one casino review page',
  icons: {
    icon: '/favicon.ico',
  },
};

function Footer() {
  return (
    <footer style={{ textAlign: "center", padding: "1rem", background: "#f1f1f1", width: "100%" }}>
      <p>© 2023 Your Company. All rights reserved.</p>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        {/* Pass the pre-fetched data to CasinoProvider */}
          <Menu />
          <main style={{ flex: "1" }}>{children}</main>
          <Footer />
      </body>
    </html>
  );
}
