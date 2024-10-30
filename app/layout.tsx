import type { Metadata } from "next";
import { Noto_Sans_Display} from "next/font/google";
//import localFont from "next/font/local";
import "./globals.css";

/*const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});*/

const noto = Noto_Sans_Display({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Compañia Dashboard | FelipeDev",
  description: "Curso de Nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${noto.className} ${noto.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
