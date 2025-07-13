export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js App Layout</title>
      </head>
      <body>
        <header>
          <h1>My Next.js App</h1>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2023 My Next.js App</p>
        </footer>
      </body>
    </html>
  );
}