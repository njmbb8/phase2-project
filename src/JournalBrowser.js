import React from "react";
import Timecard from "./Timecard";
import JournalCard from "./JournalCard";
import { Route, useRouteMatch } from "react-router";

function JournalBrowser({journals}){

    const journalList = journals.map((journal) => {
        return <Timecard 
            key = {journal.id} 
            journal = {journal} 
            />
    })

    const match = useRouteMatch();

    return (
        <div id="journalBrowser">
            <div id="journalList">{journalList}</div>
            <Route exact path={match.url}>
                <JournalCard journals = {journals} />
            </Route>
            <Route path={`${match.url}/:journalID`}>
                <JournalCard journals = {journals} />
            </Route>
        </div>
    )
}

export default JournalBrowser