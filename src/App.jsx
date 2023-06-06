import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Form } from './components/Form';
import { DisplayVotes } from './components/DisplayVotes';
import { Loader } from './components/Loader';

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
      console.log('existing voter');
      fetch('https://cat-server.onrender.com/get-votes')
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setTotalCatVotes(prev => ({
            ...prev,
            votes: data.votes,
            total: data.votes.totalCatVotes
          }));
        });
      setIsVoted(true);
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
                <DisplayVotes />
              ) : (
                <>
                  <Form />
                  {isLoading ? <Loader /> : null}
                  {alertMsg ? <AlertMsg msg={alertMsg} /> : null}
                </>
              )
            }
          />
          {isVoted ? <Route path="/DisplayVotes" element={<DisplayVotes />} /> : null}
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Context.Provider>
    </>
  );
}

export default App;
