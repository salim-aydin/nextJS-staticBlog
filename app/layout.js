import { Inter } from "next/font/google"; // Google font
import styles from "./styles.module.css"; // styles/global.css 'i import et
import "../styles/global.css";  // styles/global.css 'i import et
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = { // metadata
  title: "Blog", // title
  description: "Blog sayfası", // description
};

const interFont = Inter({ subsets: ['latin'] }) // Google font


export default function RootLayout({ children }) { // Layout
  return ( 
    <html lang="tr" className={interFont.className}>  
      <body className={styles.container}> 
       <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
