import { Seo, Navbar, SearchHero, SearchBar, ResponseDisplay } from "@/components";
import { useAtom } from "jotai";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useResume } from "@/hooks";
import { ResumeRequest, ResumeResponse } from "@/models";
import { searchQueryAtom, responsesAtom, searchHeroAtom } from "@/components";

const queryClient = new QueryClient();

export default function Home() {
  const [searchTerm, setSearchTerm] = useAtom(searchQueryAtom);
  const [responses, setResponses] = useAtom(responsesAtom);
  const [searchHero, setSearchHero] = useAtom(searchHeroAtom);
  const { mutate, data, error, isPending } = useResume();

  const handleButtonClick = () => {
    if (!searchTerm.trim) return;

    const requestData: ResumeRequest = {prompt: searchTerm};
    
    mutate(requestData, {
      onSuccess: (newResponse: ResumeResponse) => {
        setResponses((prevResponses) => [...prevResponses, newResponse]);
      },
    });
    setSearchTerm("");
    setSearchHero(true);
  };

  //TODO: Revisar refresh ineccesario en el input
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <main>
      <Seo />
      <Navbar />
      <QueryClientProvider client={queryClient}>
      <SearchHero hasSearched={false}>
        <SearchBar
          searchTerm= {searchTerm}
          handleInputChange={handleInputChange}
          handleButtonClick={handleButtonClick}
          placeholder="Drop your notes here and let's make them better!..."
        />
      </SearchHero>
      <ResponseDisplay responses={responses} isPending={isPending} error={error?.message ?? null} onRetry={handleButtonClick}/>
      </QueryClientProvider>
    </main>
  );
}
