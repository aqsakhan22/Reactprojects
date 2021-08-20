import React from 'react'
import { Quizarea } from './Quizarea'
import { useState } from 'react';
import { ScoreArea } from './ScoreArea';
import data from './api/data'


export const Questionare  = () => {
    const [current,setCurrent]=useState(0);
    const [correct,setcorrect]=useState(0);
    const [incorrect,setincorrect]=useState(0);
    const [isFinished,setisFinished]=useState(false);

   // let current=0;
//   let correct=0;
//   let incorrect=0;
//   let isFinished=false
 
  const checkdata=(choice)=>{
     // console.log(choice);
      if(choice ===  data[current].correct){
       
          setcorrect(correct + 1);
      }
      else{
        setincorrect(incorrect + 1);
    }
    if(current === data.length- 1){
       setisFinished(true);

    }
    else{
        setCurrent(current + 1);
    }
    
}

    return (
        <div>
            <Quizarea isFinished={isFinished} checkdata={checkdata} data={data[current]}/>
            <ScoreArea correct={correct} incorrect={incorrect} isFinished={isFinished}/>
        </div>
    )
}
