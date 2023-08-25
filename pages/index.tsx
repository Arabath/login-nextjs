
import { Inter } from "next/font/google";
import NextLink from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${inter.className}`}
    >
      <div>      
          <NextLink href="/auth/login" passHref>
            Inicia Sesión
          </NextLink>
      </div>
    </main>
  );
}
