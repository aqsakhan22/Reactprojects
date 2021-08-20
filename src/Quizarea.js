import React from 'react'
import { AnswerList } from './AnswerList'
import { Questions } from './Questions'
import {UserGreeting} from './UserGreeting'
 
export const Quizarea = (props) => {
    if(props.isFinished){
       return <UserGreeting/>
    }

    else{

        return (
            <div className="container">
    
                
               <Questions  data={props.data}/>
                <AnswerList checkdata={props.checkdata} data={props.data} />
            </div>
        )
    }
    
}
