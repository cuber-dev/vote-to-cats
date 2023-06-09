import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Form } from './components/Form';
import { DisplayVotes } from './components/DisplayVotes';
import { Loader } from './components/Loader';
import { AlertMsg } from './components/AlertMsg';


export const Context = React.createContext();

function App() {
  const [totalCatVotes, setTotalCatVotes] = useState({});
  const [selectedImg, setSelectedImg] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [alertMsg, setAlertMsg] = useState('');
  const [isVoted, setIsVoted] = useState(false);

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem('is-cat-voter'));
    if (id) {
      setIsVoted(true);
      setAlertMsg('You have already voted')
      fetch('https://cat-server.onrender.com/get-votes')
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.votes){
            setTotalCatVotes(prev => ({
              votes: data.votes,
              total: data.votes.totalCatVotes
            }));
          }else{
            setTotalCatVotes(prev => data.message)
          }
        });
    }
  }, []);

  const props = {
    setTotalCatVotes,
    totalCatVotes,
    selectedImg,
    setSelectedImg,
    setIsLoading,
    setAlertMsg
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Context.Provider value={props}>
        <Routes>
          <Route
            path="/"
            element={
              isVoted ? (
                <DisplayVotes isVoted={isVoted}/>
              ) : (
                <Form />
              )
            }
          />
          {isVoted ? '' : <Route path="/DisplayVotes" element={<DisplayVotes />} />}
          <Route path="*" element={<h1>404 Not Found <a href="/">Go Back</a></h1>} />
        </Routes>
      </Context.Provider>
      {isLoading ? <Loader /> : null}
      {alertMsg ? <AlertMsg msg={alertMsg} /> : null}
    </>
  );
}

export default App;
