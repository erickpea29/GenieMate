import { useMutation } from "@tanstack/react-query";
import { fetchData } from "@/lib/api";
import { ResumeRequest, ResumeResponse } from "@/models";

export const useResume = () => {
  
  return useMutation<ResumeResponse, Error, ResumeRequest>({
    mutationFn: async (requestBody: ResumeRequest) => {
      const formData = new FormData();
      formData.append("prompt", requestBody.prompt);
      if (requestBody.files) {
        requestBody.files.forEach((file) => {
          formData.append("files", file);
        });
      }
      const response = await fetchData<ResumeResponse>(
        "resume",
        "POST",
        formData,
        {"Content-Type": "multipart/form-data"}
      );

      if (!response.success || !response.data) {
        throw new Error(response.message || "API request failed");
      }

      return response.data;
    },
  });
};