import React from "react";

function JournalCard({journal}){
    const journalDate = new Date(journal.date)
    return(
        <div>
            <h2>{journalDate.toDateString()}</h2>
            <h3>{journalDate.toTimeString()}</h3>
            <textarea value={journal.entry} readOnly cols={100}  rows={25}></textarea>
        </div>
    )
}

export default JournalCard