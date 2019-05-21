let musclesJSON = require("./data.json")
 let workoutsArray = []
let count = 0  

module.exports = {
    // importing muscles from the backend to the front end 
    getMuscles: (req, res, next) => {
        res.status(200).send(musclesJSON)
    },

    displayWorkout: (req, res, next) => {
        const { workout, muscles_targeted, img, status } = req.body

        let newWorkout = {
            workout: workout,
            muscles_targeted: muscles_targeted,
            img: img,
            status: status,
            id: count + 1
        }
        count++
        workoutsArray.push(newWorkout)
        res.status(200).send(workoutsArray)
    },

    toggleWorkout: (req, res, next) => {
        let { id } = req.params

        function loop(id) {
            for (let i = 0; i < workoutsArray.length; i++) {
                // parseInt id because id from req.params is a string and id on the workout object is a number
                if (workoutsArray[i].id === parseInt(id)) {
                    workoutsArray[i].status = true
                }
            }
        }

        loop(id)

        res.status(200).send(workoutsArray)
        console.log("END", workoutsArray)
    },

    deleteWorkout: (req,res,next) =>{
        let {id} = req.params

        function deleteWorkout(id){
            for (let i = 0; i < workoutsArray.length; i++){
                // parseInt id because id is currently a string
                if (workoutsArray[i].id === parseInt(id)){
                     workoutsArray.splice(i, 1)
            } 
        }
    }
    deleteWorkout(id)
    res.status(200).send(workoutsArray)
 }

}