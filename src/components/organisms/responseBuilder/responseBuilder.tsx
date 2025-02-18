import React from "react";
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

export function ResponseBuilder() {
  return (
    <div className="mx-auto mt-6 flex max-w-5xl flex-col items-center justify-center px-4 pt-32 sm:px-12 sm:pt-4">
      <div className="flex w-full flex-col items-center gap-4 text-center sm:flex-row">
        <div className="w-full">
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            <Resume />
          </QueryClientProvider>
        </div>
      </div>
    </div>
  );
};




