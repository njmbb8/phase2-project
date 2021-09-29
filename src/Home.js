import React, {useState} from "react";
import JournalCard from "./JournalCard";

function Home({journals}){

    const [activeJournal, setActiveJournal] = useState(journals[Math.floor(Math.random() * journals.length)])

    function setRandomJournal(){
        setActiveJournal(journals[Math.floor(Math.random() * journals.length)])
    }

    return (
        <div id="Home">
            <JournalCard journal = {activeJournal}/>
            <button onClick={setRandomJournal}>Random Journal</button>
        </div>
    )
}

export default Home