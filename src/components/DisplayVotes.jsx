import { useContext, useEffect, useState } from 'react';
import { Context } from '../App';
import { ImageBox } from './ImageBox';
import { ProgressBar } from './ProgressBar';


export function DisplayVotes({ isVoted }){
  const [percentages,setPercentages] = useState({})
  const { totalCatVotes } = useContext(Context)

  if(isVoted){
    useEffect(() => {
      if(isVoted && totalCatVotes.votes){
          const sorted = {
            cat1 : totalCatVotes.votes.cat1.percent,
            cat2 : totalCatVotes.votes.cat2.percent,
            cat3 : totalCatVotes.votes.cat3.percent,
            cat4 : totalCatVotes.votes.cat4.percent,
            total : new Intl.NumberFormat('en-US',{
              notation : 'compact',
              compactDisplay : 'short'
            }).format(totalCatVotes.total)
          }
          setPercentages(sorted)
      }
    },[isVoted,totalCatVotes])
  }else{
    useEffect(() => {
      const sorted = {
        cat1 : totalCatVotes.votes.cat1.percent,
        cat2 : totalCatVotes.votes.cat2.percent,
        cat3 : totalCatVotes.votes.cat3.percent,
        cat4 : totalCatVotes.votes.cat4.percent,
        total : new Intl.NumberFormat('en-US',{
          notation : 'compact',
          compactDisplay : 'short'
        }).format(totalCatVotes.total)
      }
      setPercentages(sorted)
    },[])
  }
      
  return (<>
    <ImageBox selectedImg={''} />
    { 
      Object.keys(percentages).length > 0 ? <ProgressBar percentages={percentages} /> : 'loading...'
    }
  </>)   
    
}

