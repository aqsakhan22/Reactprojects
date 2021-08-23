import React from 'react'
import './student.css'
import { useState } from 'react';
export const Students = (props) => {

    const [scorevalue, setScore] = useState(props.score)

    const change = () => {
        setScore(scorevalue + 1);
        console.log(scorevalue);
    }



    return (
        <div className="student">
            <div className="row" key={props.name} >

                <div className="col studentdata">
                    <h2 className="studentName">{props.name}
                        <button className="scorebtn" onClick={() => change()}>+</button>
                    </h2>
                    <p className="universityName">{props.university}</p>


                </div>

                <div className="col studentdata">

                    <h3 className="score">{scorevalue}</h3>
                </div>



            </div>

            {/* {
                props.data.map((data) =>
                 
                  <div className="row" key={props.data.name} >

                            <div className="col studentdata">
                                <h2 className="studentName">{data.name} 
                                <button className="scorebtn" onClick={()=>props.changeScore(data)}>+</button>
                                </h2> 
                                <p className="universityName">{data.university}</p>
                            </div>

                            <div className="col studentdata">

                                <h3 className="score">{data.score}</h3>
                            </div>

                        

                    </div>


                )} */}
        </div>
    )
}
