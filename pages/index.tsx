import Head from "next/head";
import { useState, FormEvent } from "react";
import styles from "./index.module.css";

type Result = {
  text: string;
}

export default function Home() {
  const [keywords, setKeywords] = useState("");
  const [count, setCount] = useState("5");
  const [result, setResult] = useState<Result[]>();
  const [error, setError] = useState();

  async function onSubmit(event: FormEvent) {
    setError(undefined);
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ keywords }),
      });

      const data = await response.json();
      console.log(data)
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setKeywords("");
      setCount("5")
    } catch(error: any) {
      setError(error.message);
    }
  }

  return (
    <div>
      <Head>
        <title>Kickstart your project</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className={styles.main}>
        <img src="/dog.png" className={styles.icon} />
        <h3>Kickstart your project idea</h3>
        <form onSubmit={onSubmit}>
          <label htmlFor="keywords">Any keywords related to the project idea</label>
          <input
            type="text"
            name="keywords"
            placeholder="Enter project keywords or leave empty"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          />
          <label htmlFor="count">Number of ideas</label>
          <input
            type="number"
            name="count"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <input type="submit" value="Generate names" />
        </form>
        {result ? result.map((r, i) => <div key={i} className={styles.result}>{r.text}</div>) : ''}
        {error ? <div>{`Looks like something went wrong - ${error}`}</div> : undefined}
      </main>
    </div>
  );
}