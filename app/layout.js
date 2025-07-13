import "./globals.css";
import Navigation from "../components/Navigation";
// import 'bootstrap/dist/css/bootstrap.min.css';
export default function RootLayout({children}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js App</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}