import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar/page.jsx";
import Footer from "./components/footer.jsx";
import MovingStars from "./components/movingstar";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Portfolio",
  description: "This is my Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030014] text-white `}
      >
        <Navbar />
        <div className="fixed inset-0 z-[-1]">
          <MovingStars />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}


