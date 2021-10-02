import React, {useState} from "react";
import Timecard from "./Timecard";
import JournalCard from "./JournalCard";
import { Route, useRouteMatch } from "react-router";

function JournalBrowser({journals}){
    
    const match = useRouteMatch();
    const [activeID, setActiveID] = useState(journals[0].id)

    const journalList = journals.map((journal) => {
        return <Timecard 
            key = {journal.id} 
            journal = {journal}
            activeID = {activeID}
            />
    })


    return (
        <div id="journalBrowser">
            <div id="journalList">{journalList}</div>
            <Route exact path={match.url}>
                <JournalCard journals = {journals} setActiveID = {setActiveID} />
            </Route>
            <Route path={`${match.url}/:journalID`}>
                <JournalCard journals = {journals} setActiveID = {setActiveID}/>
            </Route>
        </div>
    )
}

export default JournalBrowser