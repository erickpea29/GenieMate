import { Seo, Navbar, SearchHero, ResponseBuilder } from "@/components";

export default function Home() {
  return (
    <main>
      <Seo />
      <Navbar />
      <SearchHero hasSearched={false}>
        <div>hola</div>
        <ResponseBuilder></ResponseBuilder>
      </SearchHero>
    </main>
  );
}
