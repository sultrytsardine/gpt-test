import { FormEvent, useState, FC } from 'react';
import { Result } from "@/components/result/Result";

interface Props {
    setError: (value: string) => void;
    setResult: (value: Result[]) => void;
}

export const Form: FC<Props> = ({ setError, setResult }) => {
    const [keywords, setKeywords] = useState("");
    const [count, setCount] = useState("5");

    async function onSubmit(event: FormEvent) {
        setError('');
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
    )
}