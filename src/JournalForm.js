import React from "react";

function JournalForm({journals, updateJournals}){

    function submitEntry(event){
        event.preventDefault()
        const now = new Date()
        const journalEntry = {
            date: now.getTime(),
            entry: event.target.childNodes[0].value
        }
        fetch('http://localhost:4000/journals',{
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(journalEntry)
        })
        .then((ret) => updateJournals([...journals, ret.json()]))
    }
    return (
        <div>
            <form onSubmit={submitEntry}>
                <textarea id="journalText" cols={50} rows={25}/>
                <input type="submit" value="Create a new Journal Entry" />
            </form>
        </div>
    )
}

export default JournalForm