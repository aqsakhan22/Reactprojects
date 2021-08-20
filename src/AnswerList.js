import React from 'react'
import { Answer } from './Answer'

export const AnswerList = (props) => {
    // console.log(props.data.options)
    const options=[];
    for(let i=0;i<props.data.options.length;i++)

    {
        options.push(
            <Answer checkdata={props.checkdata} choice={i} answer={props.data.options[i]} key={i} />
        )
    }
    return (
        <div>
    <h2>anwer lis</h2>
         {
            options
         } 
    
         
        </div>
    )
}
