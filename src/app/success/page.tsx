import styles from "@/app/page.module.css";
import Link from 'next/link'

export default function SuccessPage() {
  return (
    <div className={[styles.page, styles.centered].join(" ")}>
      <main className={styles.main}>
        <div className={styles.title}>
          <h1>Success!</h1>
          <p>You have successfully registered your choices from Come Dine With Me! We look forward to welcoming you at The Westmark</p>
        </div>
        <div className={styles.maxWidthContainter}>
          <img
            src={"https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3Y3ZmZ2M3RndTNwaHdocTAxcTdhODk0ZWFvcnlvY2ZtNWF4NXF1biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13LlAxmDwAkopO/giphy.gif"}
            alt={"A GIF showing a happy chef"}
          style={{width: "500px", maxWidth: "90%"}}/>
          <Link style={{display: "block", margin: "20px auto"}} className={styles.button} href={"/"}>Back Home</Link>
        </div>
      </main>
    </div>
  )
}