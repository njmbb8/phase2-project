import './App.css';
import { Route, Switch } from "react-router-dom";
import NavBar from './Navbar';
import Home from './Home';
import { useState, useEffect } from 'react'
import JournalBrowser from './JournalBrowser';
import JournalForm from './JournalForm';

function App() {

  const [hasLoaded, setHasLoaded] = useState(false)
  const [journals, setJournals] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/journals")
    .then((data) => data.json())
    .then((journals) => {
      const orderedJournals = journals.sort((a, b) => b.date - a.date)
      return orderedJournals
    })
    .then((ret) => {
      setJournals(ret)
      setHasLoaded(true)
    })
  }, [])

  return (
    <div className="App">
      <NavBar />
      {hasLoaded ? <Switch>
        <Route exact path = '/'>
          <Home journals = {journals}/>
        </Route>
        <Route path = '/journals'>
          <JournalBrowser journals = {journals} />
        </Route>
        <Route path = '/newJournal'>
          <JournalForm journals={journals} updateJournals={setJournals}/>
        </Route>
      </Switch> 
      :
      <h1>Loading...</h1>}
    </div>
  );
}

export default App;
