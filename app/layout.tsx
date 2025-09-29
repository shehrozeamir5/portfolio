import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Shehroze Amir – Portfolio",
  description: "RF / Microwave • Antennas • FPGA • Embedded Systems",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
