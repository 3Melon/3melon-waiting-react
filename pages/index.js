import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ali Solanki | Blog Website</title>
        <meta
          name="description"
          content="Ali Solanki is a content creator, YouTuber and a Developer."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <h1 className={styles.heading}>Enjoy Events like never before!</h1>
          <h2 className={styles.subheading}>Web3 Social | Events | Meetups</h2>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://alisolanki.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <code>Ali Solanki</code>
        </a>
      </footer>
    </div>
  );
}
