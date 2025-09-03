import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import ThemeRegistry from "./ThemeRegistry";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Kirill Mikhaylov | Digital Garden",
  description: "Personal digital garden of Kirill Mikhaylov",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
