import './App.css';
import { Route, Switch } from "react-router-dom";
import NavBar from './Navbar';
import Home from './Home';
import { useEffect, useReducer } from 'react'
import JournalBrowser from './JournalBrowser';
import JournalForm from './JournalForm';

function App() {
  function reducer(state, action){
    if(action.type === "Loading Data"){
      return {
        hasLoaded: false,
        journals: [],
        message: 'Loading...'
      }

    }
    else if(action.type === "Loaded Data"){
      return{
        hasLoaded: true,
        journals: action.payload,
        message: ''
      }
    }
    else if(action.type === "Error Loading"){
      return {
        hasLoaded: false,
        journals: [],
        message: `${action.payload.name}: ${action.payload.message}`
      }
    }
    else{
      return state
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    hasLoaded: false,
    journals: [],
    message: ''
  })

  const {hasLoaded, journals, message} = state

  useEffect(() => {
    dispatch({type: "Loading Data"})
    fetch("http://localhost:4000/journals")
    .then((data) => data.json())
    .then((journals) => {
      const orderedJournals = journals.sort((a, b) => b.date - a.date)
      return orderedJournals
    })
    .then((ret) => {
      dispatch({type: "Loaded Data", payload: ret})
    })
    .catch((error)=>{
      dispatch({type: "Error Loading", payload: error})
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
          <JournalForm journals={journals} dispatch={dispatch}/>
        </Route>
      </Switch> 
      :
      <h1>{message}</h1>}
    </div>
  );
}

export default App;
