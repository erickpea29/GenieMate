import { Geist, Geist_Mono } from "next/font/google";
import { Seo, Navbar, SearchHero } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main>
      <Seo />
      <Navbar />
      <SearchHero hasSearched={false}>
        <div>hola</div>
      </SearchHero>
    </main>
  );
}
