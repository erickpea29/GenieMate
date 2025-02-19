import React from "react";
import { ResumeResponse } from "@/models";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  responses: ResumeResponse[];
  isPending: boolean;
  error: string | null;
  onRetry: () => void;
};

export const  ResponseDisplay: React.FC<Props> = ({ responses, isPending, error, onRetry }) => {
  return (
    <div className="mx-auto mt-4 flex max-w-5xl flex-col items-center justify-center px-4 pt-16 sm:px-12 sm:pt-4">
      <div className="relative w-full max-w-4xl mx-auto">
        {isPending && (
          <div className="p-4 bg-white text-dark rounded-lg shadow-md dark:bg-dark-foreground dark:text-white">
            <span className="animate-pulse text-white">Generating knowledge...</span>
          </div>
        )}
        {error && (
          <div className="p-4 bg-white text-dark rounded-lg shadow-md dark:bg-dark-foreground dark:text-white">
            <p>⚠️ <strong>{error}</strong></p>
            <button
              onClick={onRetry}
              className=" rounded-3xl w-full sm:w-auto px-4 bg-white text-black py-2 text-base flex items-center gap-2 dark:bg-dark-foreground dark:text-white dark:border-gray-500 border-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800"
            >
              Retry 🔄
            </button>
          </div>
        )}
        {!error && responses.map((response, index) => (
          <div className="p-4 bg-white text-dark rounded-lg shadow-md dark:bg-dark-foreground dark:text-white">
            <ReactMarkdown className="prose prose-sm dark:prose-invert" remarkPlugins={[remarkGfm]}>
              {response.response}
            </ReactMarkdown>
          </div>
        ))}
      </div>
    </div>
  );
};
