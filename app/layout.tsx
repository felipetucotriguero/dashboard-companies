import type { Metadata } from "next";
import { Noto_Sans_Display} from "next/font/google";

import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
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
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${noto.className} ${noto.className} antialiased`}
      >
         <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
