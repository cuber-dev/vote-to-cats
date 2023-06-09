import React, { useContext } from 'react';
import { Context } from '../App';
import { ImageBox } from './ImageBox';
import { NavLink  } from 'react-router-dom';

export function Form() {
  const { setTotalCatVotes ,selectedImg , setSelectedImg , setIsLoading} = useContext(Context)
  async function handleSubmit(e) {
    e.preventDefault(); 
    setIsLoading(true)

    try {
      const response  = await fetch('https://cat-server.onrender.com/api/v1/voters', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cat : selectedImg }),
      })
  
      const data = await response.json();
        setTotalCatVotes(prev => {
          return { votes : data.votes , total : data.total }
        })
        setSelectedImg('')
        setTimeout(() => {
          document.querySelector('#display-votes').click()
          setIsLoading(false)
        }, 200);
        window.addEventListener('visibilitychange', () => {
          localStorage.setItem('is-cat-voter', JSON.stringify(true))
        })
      
    } catch (error) {
      console.log('Error occurred during vote submission:', error);
    }
  }
   
  return (
    <>
      <ImageBox selectedImg={selectedImg}/>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Vote To Your Favorite Cat</h3>

        <input
          type="radio"
          name="cat"
          value="cat1"
          id="cat1"
          className="form-check-input"
          onChange={(e) => setSelectedImg(e.target.value)}
        />
        <label htmlFor="cat1">Cat - 01</label>
        <br />

        <input
          type="radio"
          name="cat"
          value="cat2"
          id="cat2"
          className="form-check-input"
          onChange={(e) => setSelectedImg(e.target.value)}
        />
        <label htmlFor="cat2">Cat - 02</label>
        <br />

        <input
          type="radio"
          name="cat"
          value="cat3"
          id="cat3"
          className="form-check-input"
          onChange={(e) => setSelectedImg(e.target.value)}
        />
        <label htmlFor="cat3">Cat - 03</label>
        <br />

        <input
          type="radio"
          name="cat"
          value="cat4"
          id="cat4"
          className="form-check-input"
          onChange={(e) => setSelectedImg(e.target.value)}
        />
        <label htmlFor="cat4">Cat - 04</label>
        <br />
        <button type="submit" className="btn-submit">
            Submit
        </button>
        <NavLink to={"/DisplayVotes"} id='display-votes' ></NavLink>
      </form>
    </>
  );
}   
