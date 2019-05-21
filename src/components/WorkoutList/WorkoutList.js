import React, { Component } from 'react'
import './workoutList.css'
 
class WorkoutList extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        console.log("WORKOUT PROPS", this.props)
        let workouts = this.props.workouts.map(element => {
            console.log("MAP!")
            return (
                <div 
                    className="Workouts">

                    <img className="individualWorkout" src={element.img}  alt={element.workout}
                     />
                
                <h1 className='muscles-targeted'>
                      {element.muscles_targeted}
                </h1>

                  <h2 className='workoutUpdate'>Do you even lift? {element.status.toString().toUpperCase()} </h2>

                  <button onClick={() => this.props.toggleStatus(element.id)} className='lift'>CANES = GAINS
                  </button>

                  <button onClick={() => {
                    this.props.deleteWorkout(element.id)
                  }} className= 'delete workout'>delete</button>

                </div>
            )
        })


        return (
            <div>
                {workouts}
            </div>
        )
    }
}

export default WorkoutList