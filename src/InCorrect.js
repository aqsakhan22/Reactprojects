import React from 'react'
import './App.css';
export const InCorrect = (props) => {
    return (
        <div className="incorrectAns">
            <h4>Incorrect : <span>  {props.incorrect}</span></h4>
           
        </div>
    )
}
