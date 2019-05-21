import React from 'react'
import './muscles.css'
 
function Muscles(props){
    console.log("MUSCLE PROPS1111", props)

    return(
        <div className="muscles_container_list"> 
            {props.muscle1.map(element => {
                return <div className="individual_muscle">
                    
                    <h2 className="muscle_workout">{element.muscles_targeted}</h2>
               
                <button onClick={() => props.addWorkout(element)} className='gainz'>Add Gainz</button>
                
                </div>
            })
            }
        </div>
    )
}

export default Muscles