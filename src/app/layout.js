import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";
import { Sidebar } from "@/components/sidebar";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"], // Define o conjunto de caracteres que a fonte carrega
  weight: ["400", "600", "700"], // Define os pesos da fontes que tem no site
});

export const metadata = {
  title: "Contatos",
  description: "Crie e gerencie seus contatos de forma fácil e rápida.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={nunitoSans.className}>
        <article className={styles.wrapper}>
          <Sidebar />
          <div className={styles.content}>{children}</div>
        </article>
      </body>
    </html>
  );
}
