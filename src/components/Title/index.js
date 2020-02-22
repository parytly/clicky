import React from "react";
import "./style.css";

function Title(props) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container title">
                <h1 className="display-4">The Clicky Game</h1>
                <p className="lead">Clicking on a South Park character will shuffle all the characters around. Don't click on the same character twice, or you will lose. So lets see how far you can get.</p>
            </div>
        </div>
    )
}

export default Title;