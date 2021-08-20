import React from 'react'
import './App.css';
export const Correct = (props) => {
    return (
        <div className="correctAns">
            <h4>Correct : <span>{props.correct}</span></h4>
           
            
        </div>
    )
}
