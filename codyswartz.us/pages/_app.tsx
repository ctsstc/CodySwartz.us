import '../styles/globals.scss';

import Gtag from '@/components/gtag';

import type { AppProps } from "next/app";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Gtag />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
