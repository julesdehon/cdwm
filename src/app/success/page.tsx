import styles from "@/app/page.module.css";
import Link from 'next/link'
import Image from "next/image";

export default function SuccessPage() {
  return (
    <div className={[styles.page, styles.centered].join(" ")}>
      <main className={styles.main}>
        <div className={styles.title}>
          <h1>Success!</h1>
          <p>You have successfully registered your choices from Come Dine With Me! We look forward to welcoming you at The Westmark</p>
        </div>
        <Image src={"https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3Y3ZmZ2M3RndTNwaHdocTAxcTdhODk0ZWFvcnlvY2ZtNWF4NXF1biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13LlAxmDwAkopO/giphy.gif"}  alt={"A GIF showing a happy chef"}/>
        <Link style={{display: "block", margin: "20px auto"}} className={styles.button} href={"/"}>Back Home</Link>
      </main>
    </div>
  )
}