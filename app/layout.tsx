import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/app/Header"; // Importamos el Header
import Footer from "@/app/Footer"; // Importamos el Footer 
 
// Configuración de fuentes (puedes ajustar según las que uses)
const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const montserrat = Montserrat({ subsets: ["latin"], variable: '--font-montserrat' });

export const metadata: Metadata = {
  title: "Handcrafted Haven",
  description: "A virtual marketplace for artisans.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable}`} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
