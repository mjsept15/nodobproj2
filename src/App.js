import React, { Component } from 'react';
import './App.css';
import Muscles from './components/Muscles/Muscles'
import axios from 'axios';
import WorkoutList from './components/WorkoutList/WorkoutList'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      muscles: [],
      workouts: []
    }
    this.deleteWorkout = this.deleteWorkout.bind(this)
  }


  // componentDidMount runs whenever the component is loaded / refreshed.
  componentDidMount = () => {
    // GET = READ.. 
    axios.get('/api/muscles').then(yogurt => {
      this.setState({
        muscles: yogurt.data
      })
    })
  }

  addWorkout = (body) => {
    // POST = CREATE
    axios.post('/api/displayWorkout', body).then(poop => {
      this.setState({
        workouts: poop.data
      })
    })
  }

  toggleStatus = (id) => {
    // PUT = UPDATE
    // the ${id} in the endpoint is the paramater (params) that is being passed to the backend
    axios.put(`/api/updateWorkout/${id}`).then(shiz => {
      this.setState({
        workouts: shiz.data
      })
      console.log("TOGGLE END", this.state.workouts)
    })
  }

  deleteWorkout(id) {
    // DELETE = DELETE
    axios.delete(`/api/deleteWorkout/${id}`).then(response => {
      this.setState({
        workouts: response.data
      })
      console.log("DELETE END", this.state.workouts)
    })



  }

  render() {

    return (
      <div className="App">
        <div>
          <Muscles muscle1={this.state.muscles} addWorkout={this.addWorkout} />
        </div>
        <div className="WorkoutList_Container">
          <WorkoutList workouts={this.state.workouts} toggleStatus={this.toggleStatus} deleteWorkout={this.deleteWorkout} />
        </div>

      </div>
    );
  }
}
export default App;
