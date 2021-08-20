import React from 'react'
import { Correct } from './Correct'
import {InCorrect} from './InCorrect'


export const ScoreArea = (props) => {
    return (
        props.isFinished ?  
        <div className="scoreArea">

            <Correct correct={props.correct}/>
           
           <InCorrect incorrect={props.incorrect}/>
        </div>

        : ""
    )
}
