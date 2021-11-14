import "../styles/globals.scss";
import type { AppProps } from "next/app";
import gtag from "@/components/gtag";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <gtag />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
