"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Banner from "./assets/banner.svg"
import {Snowfall} from "react-snowfall";
import {useRouter} from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className={[styles.page, styles.centered].join(" ")}>
      <main className={styles.main}>
        <Image
          src={Banner}
          alt="come dine with me banner"
          width={500}
          className={styles.banner}
          priority
        />
        <button className={[styles.button, styles.mainPageButton].join(" ")} onClick={() => router.push("/selection")}>Make Your Selection</button>
      </main>
      <Snowfall color="#c1dcf3" radius={[1.0, 5.0]}/>
    </div>
  );
}
