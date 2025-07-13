import "../globals.css";
import Navigation from "@/components/Navigation";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
});
export default function RootLayout({children}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js App</title>
      </head>
      <body className={roboto.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}