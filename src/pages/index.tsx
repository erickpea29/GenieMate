import { Seo, Navbar, SearchHero } from "@/components";

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
