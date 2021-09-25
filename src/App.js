import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";
import NavBar from './Navbar';
import Home from './Home';
import { useState, useEffect } from 'react'

function App() {

  const [hasLoaded, setHasLoaded] = useState(false)
  const [activeJournal, setActiveJournal] = useState({})
  const [journals, setJournals] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/journals")
    .then((data) => data.json())
    .then((ret) => {
      setJournals(ret)
      setHasLoaded(true)
    })
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path = '/'>
          {hasLoaded? <Home journals = {journals} setActiveJournal = {setActiveJournal} activeJournal = {activeJournal} /> : <h1>Loading...</h1>}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
