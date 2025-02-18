import { useMutation } from "@tanstack/react-query";
import { fetchData } from "@/lib/api";
import { ResumeRequest, ResumeResponse } from "@/models";



export const useResume = () => {
  return useMutation<ResumeResponse, Error, ResumeRequest>({
    mutationFn: async (requestBody: ResumeRequest) => {
      const response = await fetchData<ResumeResponse>(
        "resume",
        "POST",
        requestBody
      );

      if (!response.success || !response.data) {
        throw new Error(response.message || "API request failed");
      }

      return response.data;
    },
  });
};