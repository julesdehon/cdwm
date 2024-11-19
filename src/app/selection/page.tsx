import styles from "../page.module.css";
import SelectionForm from "@/app/selection/selectionForm";

export default function Selection() {

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.title}>
          <h1>Menu Selection</h1>
          <p>Please take a moment to tell us about your preferences for the customisable parts of the menu.</p>
        </div>
        <SelectionForm/>
      </main>
    </div>
  )
}