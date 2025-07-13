import "../globals.css";
import Navigation from "@/components/Navigation";
import { Roboto,Work_Sans } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});
const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});
export default function RootLayout({children}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js App</title>
      </head>
      <body className={`${roboto.variable} ${workSans.variable} `}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}