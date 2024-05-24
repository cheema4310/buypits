import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'BuyPits',
  description: 'Price Check, Quality Check, Then Buy!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body data-theme="lofi" className={inter.className}>
        <div className="bg-base-200">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
