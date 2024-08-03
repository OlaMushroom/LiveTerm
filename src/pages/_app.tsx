import '../styles/global.css';
import React from 'react';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
//import { SpeedInsights } from '@vercel/speed-insights/react';
const App = ({ Component, pageProps }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const onClickAnywhere = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
          maximum-scale="1"
        />
        <meta name="description" content="Description." />
      </Head>
      <div
        className="text-light-foreground dark:text-dark-foreground min-w-max text-xs md:min-w-full md:text-base"
        onClick={onClickAnywhere}
      >
        <main className="bg-light-background dark:bg-dark-background w-full h-full p-2">
          <Component {...pageProps} inputRef={inputRef} />
        </main>
      </div>
      <Analytics />
    </>
  );
};
export default App;
