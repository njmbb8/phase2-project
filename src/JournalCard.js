import React from "react";
import { useParams, useRouteMatch } from "react-router";

function JournalCard({journal, journals}){
    const params = useParams();
    const match = useRouteMatch();

    function selectJournal(){
        if(match.url === '/'){
            return journal
        }
        else{
            if(params.journalID){
                return journals.filter((journal) => parseInt(match.params.journalID) === journal.id)[0]
            }
            else{
                return journals[0]
            }
        }
    }

    const displayJournal = selectJournal()
    const journalDate = new Date(parseInt(displayJournal.date))

    return(
        <div className = "journalCard">
            <h2 id="journalTime">{journalDate.toDateString()}</h2>
            <h3 id="journalDate">{journalDate.toLocaleTimeString()}</h3>
            <p id="journalEntry">{displayJournal.entry}</p>
        </div>
    )
}

export default JournalCard