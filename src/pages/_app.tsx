import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  weight: ["400", "100", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${robotoMono} min-h-screen bg-white dark:bg-zinc-950`}>
      <Component {...pageProps} />;
    </div>
  );
}
