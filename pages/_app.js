import "../styles/globals.css";
import Head from "next/head";
import Navigation from "../components/navigation/Navigation";

function MyApp({ Component, pageProps }) {
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
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
