import React from "react";
import { Link, useParams } from "react-router-dom";

function Timecard({journal, activeID}){
    const journalDate = new Date(parseInt(journal.date))
    const style = activeID === journal.id ? {"background-color": "blue"} : {}
    return (
        <div id = {journal.id} style = {style}>
            <Link to = {`/journals/${journal.id}`}>
                {`${journalDate.toDateString()}\n${journalDate.toLocaleTimeString()}`}
            </Link>
        </div>
    )
}

export default Timecard