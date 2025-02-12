import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  weight: ["400", "100", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${robotoMono} min-h-screen dark:bg-dark-background `}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}
