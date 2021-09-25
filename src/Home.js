import React from "react";
import JournalCard from "./JournalCard";

function Home({journals, activeJournal, setActiveJournal}){
    function setRandomJournal(){
        setActiveJournal(journals[Math.floor(Math.random() * journals.length)])
    }

    setRandomJournal()

    return (
        <div id="Home">
            <JournalCard journal = {activeJournal}/>
            <button onClick={setRandomJournal}>Random Journal</button>
        </div>
    )
}

export default Home