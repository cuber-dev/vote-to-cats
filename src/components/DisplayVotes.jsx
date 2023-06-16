import { useContext, useEffect, useState } from 'react';
import { Context } from '../App';
import { ImageBox } from './ImageBox';
import { ProgressBar } from './ProgressBar';

export function DisplayVotes({ isVoted }) {
  const [msg, setMsg] = useState('');
  const { totalCatVotes } = useContext(Context);
  
  return (
    <>
      <ImageBox selectedImg={''} />
      {Object.keys(totalCatVotes).length > 0 ? (
        <ProgressBar data={totalCatVotes} />
      ) : (
        'loading...'
      )}
      {msg && <h1 className="error">{msg}</h1>}
    </>
  );
}
