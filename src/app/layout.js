import "./globals.css";
import { sourceSans } from "./fonts";

export const metadata = {
  title: "Leaflet demo",
  description: "built on Next",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sourceSans.className}>{children}</body>
    </html>
  );
}
