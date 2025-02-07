import { Seo, Navbar, SearchHero, SearchBar } from "@/components";
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  //TODO: Revisar refresh ineccesario en el input
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleButtonClick = () => {
    console.log("Texto enviado:", searchTerm);
  };
  return (
    <main>
      <Seo />
      <Navbar />
      <SearchHero hasSearched={false}>
        <SearchBar
          searchTerm={searchTerm}
          handleInputChange={handleInputChange}
          handleButtonClick={handleButtonClick}
          placeholder="Drop your notes here and let’s make them better!..."
        />
      </SearchHero>
    </main>
  );
}
