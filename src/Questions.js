import React from 'react'

export const Questions = (props) => {

    
    console.log(props);
    return (
        <div>
          
       <h2 className="questions">
           {props.data.question}
       </h2>
           
        </div>
    )
}
