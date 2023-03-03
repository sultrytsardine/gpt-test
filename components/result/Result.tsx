import { FC } from 'react';

export interface Result {
    text: string;
  }

interface Props {
  result: Result[];
}

export const Results: FC<Props> = ({ result }) => {
  return result.map((r, i) => <div key={i}>{r.text}</div>)
}