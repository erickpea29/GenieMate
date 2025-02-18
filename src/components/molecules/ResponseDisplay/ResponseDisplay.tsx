import React from "react";
import { ResumeResponse } from "@/models";
import { cn } from "@/lib/utils";

type Props = {
  responses: ResumeResponse[];
  isPending: boolean;
};

export const  ResponseDisplay: React.FC<Props> = ({ responses, isPending }) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-4">
      {responses.map((response, index) => (
        <div key={index} className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
          <p className="text-sm text-gray-900 dark:text-white">{response.response}</p>
        </div>
      ))}

      {isPending && (
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
          <span className="animate-pulse text-gray-500">Escribiendo...</span>
        </div>
      )}
    </div>
  );
};
