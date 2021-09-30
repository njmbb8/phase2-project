import React from "react";

function JournalForm({journals, dispatch}){

    function submitEntry(event){
        event.preventDefault()
        dispatch({type: "Loading Data"})
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
        .then((data) => data.json())
        .then((ret)=> {
            const sortedJournals = [...journals, ret].sort((a, b) => b.date - a.date)
            dispatch({type: "Loaded Data", payload: sortedJournals})
            event.target.childNodes[0].value = ''
        })
        .catch((error) => dispatch({type: "Error Loading", payload: error}))
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