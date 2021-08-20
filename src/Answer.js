import React from 'react'
import './App.css';
export const Answer = (props) => {
   
    return (
        <div >
            <button   className="btn btn-success m-2 p-10 btnAnswer" onClick={()=>props.checkdata(props.choice)}>{props.answer}</button>
        </div>
    )
}
