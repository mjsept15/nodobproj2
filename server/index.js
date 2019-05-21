const express = require('express')
const app = express()

const {
    getMuscles,
    displayWorkout,
    toggleWorkout,
    deleteWorkout
} = require('./workoutController')

app.use(express.json())



app.get('/api/muscles', getMuscles)

app.post('/api/displayWorkout', displayWorkout)

app.put('/api/updateWorkout/:id',toggleWorkout)

app.delete('/api/deleteWorkout/:id', deleteWorkout)

const port = 4000

app.listen(port, () => console.log(`server listening on port!! ${port}`))