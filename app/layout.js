import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import AdminLayout from "@/components/Admin/AdminLayout/AdminLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home Default",
  description: "Home page always default",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
