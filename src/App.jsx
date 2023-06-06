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

  const props = {
    setTotalCatVotes,
    totalCatVotes,
    selectedImg,
    setSelectedImg,
    setIsLoading
  }
  return (<>
      <Context.Provider value={props}>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/DisplayVotes" element={<DisplayVotes />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Context.Provider>
      {isLoading ? <Loader /> : ''}
    </>)
}

export default App
