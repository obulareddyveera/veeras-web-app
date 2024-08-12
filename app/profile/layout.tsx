import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StoreProvider from "../StoreProvider";
import HomeNavbar from "../components/header/HomeNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VEERA`s Profile",
  description: "VEERA`s Profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider
          Children={
            <>
              <HomeNavbar />
              <main>{children}</main>
            </>
          }
        />
      </body>
    </html>
  );
}
