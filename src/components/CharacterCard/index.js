import React from "react";
import "./style.css";

function CharacterCard(props) {
    return (        
        <div className='card col-4' key = {props.id}>
            <button className="button" value={props.name} onClick = {(e) => {props.clickValue(e); props.shuffle();props.score() }}>
                <img name={props.name} alt = {props.name} src={props.image} width='100' height='100' />
            </button>
        </div>
    );
}

export default CharacterCard;