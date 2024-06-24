import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
// import connectDB from '@/lib/connectDB';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'BuyPits',
  description: 'Price Check, Quality Check, Then Buy!',
};

export default function RootLayout({ children }) {
  // connectDB();
  return (
    <html lang="en">
      <body data-theme="lofi" className={inter.className}>
        <div className="bg-base-200 grid grid-rows-[auto_1fr_auto] h-screen">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
