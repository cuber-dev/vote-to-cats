import React,{ useState } from 'react'
import  { Routes, Route } from 'react-router-dom'
import './App.css'
import { Form } from './components/Form'
import { DisplayVotes } from './components/DisplayVotes'
import { Loader } from './components/Loader'
export const Context = React.createContext()

function App() {
  const [totalCatVotes,setTotalCatVotes] = useState({})
  const [selectedImg, setSelectedImg] = useState('');
  const [isLoading,setIsLoading] = useState(false)
  const [alertMsg, setAlertMsg] = useState('')
  const isVoted = () => {
    const isVoted = JSON.parse(localStorage.getItem('is-cat-voter'))
    if(isVoted){
      fetch('https://cat-voter-api.render.com/get-votes')
      .then(res => res.json())
      .then(data => setTotalCatVotes(prev => {
        return { votes : data.votes , total : data.votes.totalCatVotes }
      }))
      return true
    }
    return false
  }
  const props = {
    setTotalCatVotes,
    totalCatVotes,
    selectedImg,
    setSelectedImg,
    setIsLoading,
    setAlertMsg
  }
  return (<>
      <Context.Provider value={props}>
        <Routes>
            <Route path="/" element={isVoted() ? <DisplayVotes /> : <Form />} />
            { isVoted() ? '' : <Route path="/DisplayVotes" element={<DisplayVotes />} />}
            <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Context.Provider>
      {isLoading ? <Loader /> : ''}
      { alertMsg ? <AlertMsg msg={alertMsg}/> : ''}
    </>)
}

export default App
