
import { useContext } from 'react';
import { Context } from '../App';
import { ImageBox } from './ImageBox';
import { ProgressBar } from './ProgressBar';


export function DisplayVotes(){
    const { totalCatVotes } = useContext(Context)
    const percentages = {
        cat1 : totalCatVotes.votes.cat1.percent,
        cat2 : totalCatVotes.votes.cat2.percent,
        cat3 : totalCatVotes.votes.cat3.percent,
        cat4 : totalCatVotes.votes.cat4.percent,
        total : new Intl.NumberFormat('en-US',{
          notation : 'compact',
          compactDisplay : 'short'
        }).format(totalCatVotes.total)
    }
    
    return (<>
      <ImageBox selectedImg={''} />
      <ProgressBar percentages={percentages} />
    </>)
}