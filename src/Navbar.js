import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){

    const linkStyles = {
        display: "inline-block",
        width: "50px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "blue",
        textDecoration: "none",
        color: "white",
      };

    return (
        <div id="NavBar">
            <NavLink
                to="/"
                exact
                style={linkStyles}
                activeStyle={{ background: "darkblue" }}
            >
                Home
            </NavLink>
            <NavLink
                to="/journals"
                exact
                style={linkStyles}
                activeStyle={{ background: "darkblue" }}
            >
                Journals
            </NavLink>
            <NavLink
                to="/new_entry"
                exact
                style={linkStyles}
                activeStyle={{ background: "darkblue" }}
            >
                New Journal Entry
            </NavLink>
        </div>
    )
}

export default NavBar