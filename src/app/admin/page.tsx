"use client"
import styles from "@/app/page.module.css";
import Link from 'next/link'
import {useState} from "react";

export default function AdminPage() {
  const [data, setData] = useState([])
  const [passPhrase, setPassPhrase] = useState("")
  const [error, setError] = useState("")

  const getData = async () => {
    setError("")

    const response = await fetch(`/api/admin/retrieve?passphrase=${passPhrase}`)
    const data = await response.json();
    if (!response.ok)
    {
      setError(data.error);
      return;
    }

    setData(data.rows)
  }

  return (
    <div className={[styles.page, styles.centered].join(" ")}>
      <main className={styles.main}>
        <div className={styles.title}>
          <h1>Admin</h1>
        </div>
        <input
          placeholder="Passphrase"
          onChange={e => setPassPhrase(e.target.value)}
        />
        {error && <div>{error}</div>}
        <table style={{borderCollapse: "collapse", width: "100%"}}>
          <thead>
          <tr>
            {data.length > 0 &&
              Object.keys(data[0]).map((key) => (
                <th key={key} style={{border: "1px solid #ddd", padding: "8px"}}>
                  {key}
                </th>
              ))}
          </tr>
          </thead>
          <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, idx) => (
                <td key={idx} style={{border: "1px solid #ddd", padding: "8px"}}>
                  {String(value)}
                </td>
              ))}
            </tr>
          ))}
          </tbody>
        </table>
        <button className={styles.button} onClick={getData}>Get Data</button>
        <Link style={{display: "block", margin: "20px auto"}} className={styles.button} href={"/"}>Back Home</Link>
      </main>
    </div>
  )
}