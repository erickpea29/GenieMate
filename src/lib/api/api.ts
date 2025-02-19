const API_BASE_URL = "http://3.131.56.243:8000/api"; 

type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";

interface APIResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}

export async function fetchData<T>(
  endpoint: string,
  method: HTTPMethod = "GET",
  data?: unknown,
  customHeaders: Record<string, string> = {}
): Promise<APIResponse<T>> {
  try {
    const options: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...customHeaders, // Allows custom headers (e.g., Authorization token)
      },
    };

    if (data) {
      options.body = JSON.stringify(data); // Add body for POST, PUT, DELETE
    }

    const response = await fetch(`${API_BASE_URL}/${endpoint}`, options);

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const responseData: T = await response.json();
    return { success: true, data: responseData };
  } catch (error) {
    console.log(error);
    return { success: false, message: (error as Error).message };
  }
}