import localFont from "next/font/local";
import { Montserrat } from "next/font/google"
import { Open_Sans } from "next/font/google"
import "./globals.css";



const opensans = Open_Sans ({
  subsets: ['latin'],
  display: 'swap',
})

const montserrat  = Montserrat ({
  subsets: ['latin'],
  display: 'swap',
})

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
  title: "Meu Portfólio",
  description: "Cadu Maia",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${opensans.variable, montserrat.variable} antialiased`}
      >
      {children}
      </body>
    </html>
  );
}
