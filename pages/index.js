import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
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

      <nav className={styles.mainpagenav}>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/events">
            <li>Events</li>
          </Link>
          <Link href="/blog">
            <li>Blog</li>
          </Link>
          <Link href="/login">
            <li>Login</li>
          </Link>
        </ul>
      </nav>

      <main className={styles.main}>
        <div>
          <h1>3Melon</h1>
          <h2>Web3 Social | Events | Meetups</h2>
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
