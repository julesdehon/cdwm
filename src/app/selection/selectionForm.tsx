"use client"

import {useState} from "react";
import {useRouter} from "next/navigation";
import {Registration} from "@/app/lib/types/registration";
import styles from "./selectionForm.module.css"

export default function SelectionForm() {
  const [registration, setRegistration] = useState(new Registration())
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (field: keyof Registration, value: string) => {
    setRegistration(Registration.fromObject({ ...registration, [field]: value }));
  };

  const goHome = () => {router.push("/")}

  const onSubmitSelection = async () => {
    setIsLoading(true);
    setError("");

    if (!registration.validate())
    {
      setError("Form details are not valid. Make sure something is selected for every input.")
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: registration.toJson(),
      });

      if (response.ok) {
        router.push("/success");
      } else {
        const errorText = await response.text();
        const errorJson = JSON.parse(errorText);
        throw new Error(errorJson.error);
      }
    } catch (err) {
      console.error(err);
      setError(`Failed to submit the form. ${err}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.form}>

      <div className={styles.nameRow}>
        <div>
          <label className={styles.label}>First Name</label>
          <input
            placeholder="John"
            className={styles.input}
            onChange={e => handleChange("firstName", e.target.value)}
          />
        </div>

        <div>
          <label className={styles.label}>Last Name</label>
          <input
            placeholder="Smith"
            className={styles.input}
            onChange={e => handleChange("lastName", e.target.value)}
          />
        </div>
      </div>

      <div className={styles.formSection}>
        <div className={styles.formSectionTitle}>Your takeaway cookie</div>

        <label className={styles.label}>Molten filling</label>
        <select className={styles.select} value={registration.cookieInside}
                onChange={e => handleChange("cookieInside", e.target.value)}>
          <option value="" disabled>Select an option</option>
          <option value="Nutella">Nutella</option>
          <option value="Peanut Butter">Peanut Butter</option>
          <option value="Biscoff">Biscoff</option>
          <option value="Pistachio Butter">Pistachio Butter</option>
          <option value="Almond Butter">Almond Butter</option>
        </select>

        <label className={styles.label}>Topping</label>
        <select className={styles.select} value={registration.cookieOutside}
                onChange={e => handleChange("cookieOutside", e.target.value)}>
          <option value="" disabled>Select an option</option>
          <option value="Pretzels">Pretzels</option>
          <option value="M&Ms">M&Ms</option>
          <option value="White Chocolate">White Chocolate</option>
          <option value="Milk Chocolate">Milk Chocolate</option>
          <option value="Dark Chocolate">Dark Chocolate</option>
          <option value="Mini Marshmallows">Mini Marshmallows</option>
        </select>

      </div>

      <div className={styles.formSection}>
        <div className={styles.formSectionTitle}>Your drinks selection</div>

        <label className={styles.label}>First Cocktail</label>
        <select className={styles.select} value={registration.welcomeCocktail1}
                onChange={e => handleChange("welcomeCocktail1", e.target.value)}>
          <option value="" disabled>Select an option</option>
          <option value="Margherita">Margherita</option>
          <option value="Mojito">Mojito</option>
          <option value="Negroni">Negroni</option>
          <option value="Espresso Martini">Espresso Martini</option>
          <option value="Aperol Spritz">Aperol Spritz</option>
          <option value="Hugo Spritz">Hugo Spritz</option>
          <option value="Vodka Martini">Vodka Martini</option>
          <option value="House Special">House Special</option>
        </select>

        <label className={styles.label}>Second Cocktail</label>
        <select className={styles.select} value={registration.welcomeCocktail2}
                onChange={e => handleChange("welcomeCocktail2", e.target.value)}>
          <option value="" disabled>Select an option</option>
          <option value="Margherita">Margherita</option>
          <option value="Mojito">Mojito</option>
          <option value="Negroni">Negroni</option>
          <option value="Espresso Martini">Espresso Martini</option>
          <option value="Aperol Spritz">Aperol Spritz</option>
          <option value="Hugo Spritz">Hugo Spritz</option>
          <option value="Vodka Martini">Vodka Martini</option>
          <option value="House Special">House Special</option>
        </select>
      </div>

      <div className={styles.formSection}>
        <div className={styles.formSectionTitle}>Tell us a bit about yourself</div>

        <label className={styles.label}>Dietary Requirements</label>
        <div className={styles.subLabel}>Please let us know if you have any allergies or dietary restrictions.</div>
        <textarea className={styles.textArea} placeholder={"allergic to sesame seeds"} onChange={e => handleChange("dietaryRequirements", e.target.value)}/>

        <label className={styles.label}>2 Truths 1 Lie</label>
        <div className={styles.subLabel}>Please write down 2 truths and 1 lie about yourself, but don&#39;t say which
          are which!
        </div>
        <textarea className={styles.textArea}
                  placeholder={"1. I have met the Pope\n2. I have met Jesus Christ\n3. I am the Virgin Mary"} onChange={e => handleChange("truthsAndLie", e.target.value)}/>
      </div>

      <button className={styles.button} onClick={onSubmitSelection}>
        Submit Selection
      </button>

      <button className={[styles.button, styles.grayButton].join(" ")} onClick={goHome}>
        Go Back Home
      </button>

      {isLoading && <div className={styles.spinner}></div>}

      {error && <div className={styles.error}>{error}</div>}
    </div>
  )
}