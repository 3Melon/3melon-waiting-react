import "../styles/globals.css";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
