import { Seo, Navbar, SearchHero, SearchBar, ResponseDisplay } from "@/components";
import { useAtom } from "jotai";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useResume } from "@/hooks";
import { ResumeRequest, ResumeResponse } from "@/models";
import { searchQueryAtom, responsesAtom } from "@/components";

const queryClient = new QueryClient();

export default function Home() {
  const [searchTerm, setSearchTerm] = useAtom(searchQueryAtom);
  const [responses, setResponses] = useAtom(responsesAtom);
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
        <ResponseDisplay responses={responses} isPending={isPending} />
      </SearchHero>
      </QueryClientProvider>
    </main>
  );
}
