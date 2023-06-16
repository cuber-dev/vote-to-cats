import { useContext, useEffect, useState } from 'react';
import { Context } from '../App';
import { ImageBox } from './ImageBox';
import { ProgressBar } from './ProgressBar';

export function DisplayVotes({ isVoted }) {
  const [percentages, setPercentages] = useState({});
  const [msg, setMsg] = useState('');
  const { totalCatVotes } = useContext(Context);
  function sort(data){
    const sorted = {
      cat1: data.votes.cat1.percent,
      cat2: data.votes.cat2.percent,
      cat3: data.votes.cat3.percent,
      cat4: data.votes.cat4.percent,
      total: new Intl.NumberFormat('en-US', {
        notation: 'compact',
        compactDisplay: 'short',
      }).format(data.total),
    };
    return sorted
  }
  useEffect(() => {
    if (totalCatVotes.votes) {
      setPercentages(sort(totalCatVotes));
    } else {
      if (typeof totalCatVotes === 'string') {
        setMsg(totalCatVotes);
      }
    }
  }, [isVoted, totalCatVotes]);

  return (
    <>
      <ImageBox selectedImg={''} />
      {Object.keys(percentages).length > 0 ? (
        <ProgressBar percentages={percentages} />
      ) : (
        'loading...'
      )}
      {msg && <h1 className="error">{msg}</h1>}
    </>
  );
}
