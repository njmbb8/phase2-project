import React from "react";
import { Link } from "react-router-dom";

function Timecard({updateJournal, journal}){
    const journalDate = new Date(parseInt(journal.date))
    return (
        <div onClick = {updateJournal} id = {journal.id}>
            <Link key = {journal.id} to = {`/journals/${journal.id}`}>
                {`${journalDate.toDateString()}\n${journalDate.toLocaleTimeString()}`}
            </Link>
        </div>
    )
}

export default Timecard