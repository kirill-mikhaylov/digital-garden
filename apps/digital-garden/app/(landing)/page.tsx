"use client";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Digital Garden</h1>
        <p className={styles.description}>
          Personal digital garden of Kirill Mikhaylov
        </p>
      </main>
    </div>
  );
}
