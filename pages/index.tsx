import { Form } from "@/components/form/Form";
import { Result, Results } from "@/components/result/Result";
import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [result, setResult] = useState<Result[]>([]);
  const [error, setError] = useState('');


  return (
    <div>
      <Head>
        <title>Kickstart your project</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className={styles.main}>
        <img src="/dog.png" className={styles.icon} />
        <h3>Kickstart your project idea</h3>
        <Form setError={setError} setResult={setResult} />
        <Results result={result} />
        {error ? <div>{`Looks like something went wrong - ${error}`}</div> : undefined}
      </main>
    </div>
  );
}