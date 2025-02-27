import { Seo, Navbar, SearchHero, SearchBar, ResponseDisplay, FileUploader, inputFileAtom } from "@/components";
import { useAtom } from "jotai";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useResume } from "@/hooks";
import { ResumeRequest, ResumeResponse } from "@/models";
import { searchAtom, responsesAtom, inputAtom } from "@/components";

const queryClient = new QueryClient();

export default function Home() {
  const [request, setRequest] = useAtom(searchAtom);
  const [responses, setResponses] = useAtom(responsesAtom);
  const [input, setInput] = useAtom(inputAtom);
  const [inputFile, setinputFile] = useAtom(inputFileAtom);
  const { mutate, data, error, isPending } = useResume();

  const handleButtonClick = () => {
    if (inputFile!) {
      const requestData: ResumeRequest = {file: inputFile!};
      setRequest(requestData);
      mutate(requestData, {
        onSuccess: (newResponse: ResumeResponse) => {
          setResponses((prevResponses) => [...prevResponses, newResponse]);
        },
      });
    } else {
      const requestData: ResumeRequest = {prompt: input};
      setRequest(requestData);
      mutate(requestData, {
        onSuccess: (newResponse: ResumeResponse) => {
          setResponses((prevResponses) => [...prevResponses, newResponse]);
        },
      });
    }
    setinputFile(null);
    setInput("");
  };

  //TODO: Revisar refresh ineccesario en el input
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  return (
    <main>
      <Seo />
      <Navbar />
      <QueryClientProvider client={queryClient}>
      <SearchHero hasSearched={false}>
        <SearchBar
          searchTerm= {input}
          handleInputChange={handleInputChange}
          handleButtonClick={handleButtonClick}
          placeholder="Drop your notes here and let's make them better!..."
          fileUploaded = {!inputFile}
        />
      </SearchHero>
      <ResponseDisplay responses={responses} isPending={isPending} error={ error?.message! } onRetry={handleButtonClick}/>
      </QueryClientProvider>
    </main>
  );
}
