import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { inconsolata } from "@/assets/fonts";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={`${inconsolata.className} ${styles.header_title}`}>
          404 not found
        </h1>
      </header>
      <section className={styles.wrapper}>
        <Image
          src="/scarecrow.svg"
          alt="Scarecrow Image"
          className={styles.scarecrow}
          width={100}
          height={24}
          priority
        />

        <div className={styles.wrapper_info}>
          <h2 className={styles.title_info}>I have bad news for you</h2>
          <p className={styles.paragraph_info}>
            The page you are looking for might be removed or is temporarily
            unavailable
          </p>
          <Link href={"/"} className={styles.button}>
            Back to homepage
          </Link>
        </div>
      </section>

      <footer className={styles.footer}>
        <p className={styles.paragraph_footer}>
          created by{" "}
          <Link
            className={styles.footer_link}
            href={"https://devchallenges.io/portfolio/jasael"}
            target="_blank"
          >
            jasael
          </Link>{" "}
          - devChallenges.io
        </p>
      </footer>
    </main>
  );
}
