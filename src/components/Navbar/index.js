import React from "react";
import "./style.css";

function NavBar(props) {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light">
            <div className="container">
                <h3 className="">Clicky Game</h3>
    <h3 className="result"> {props.loser} </h3>
                <h3> Score: <span>{props.score}</span></h3>
            </div>
        </nav>
    );
}

export default NavBar;