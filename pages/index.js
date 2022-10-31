import { Html } from "next/document";
import Head from "next/head";

import { Fragment } from "react";

const HomePage = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
      </Head>
      <h1 className="font-Montserrat">The Home Page</h1>
    </>
  );
};

export default HomePage;
