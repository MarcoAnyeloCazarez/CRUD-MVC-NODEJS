const { response } = require('express')
const { getAllTasks, createTask, getTaskById, updateById, deleteById } = require('./tasks.controllers')

const getAll = (req, res) => {
    const data = getAllTasks()
    res.status(200).json(data)
}


/////////////////////////////////////////////////////////////////////
const newTask = (req, res) => {
    const newData = req.body
    createTask(newData)
    res.status(200).json(newData)
}
//////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////
const getById = (req, res) => {
    const id = Number(req.params.id)

    if(id){
         const data = getTaskById(id)
        if(data.id){
            res.status(200).json(data)
        }else{
            res.status(400).json({message: 'Invalid ID'})
        }
    }else{
        res.status(400).json({message: 'id is not a number'})
    }
}
/////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
const updateStatus = (req, res) => {
    const id = Number(req.params.id)
    const newData = req.body
    const allData = getAllTasks()

    const data = getTaskById(id)
    updateById(id, newData)
    res.status(200).json(allData)
        
    
}
////////////////////////////////////////////////////////////////


const deleteTask = (req, res) => {
    const id = Number(req.params.id)
    deleteById(id)
    res.status(200).json(id)
}

module.exports = {
    getAll,
    newTask,
    getById,
    updateStatus,
    deleteTask
}