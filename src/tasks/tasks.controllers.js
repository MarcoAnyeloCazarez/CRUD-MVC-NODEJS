const tasksDB = [
    /*{
        id: 1,
        name : "",
        topic: "",
        status: 0 
    }*/
]

///////////////////////////////////////////////////
const getAllTasks = () => {
    return tasksDB
}
///////////////////////////////////////////////////

/////////////////////////////////////////////////////
const createTask = (taskObj) => {
    if(tasksDB.length === 0){
        const newTask = {
            id: 1,
            name : taskObj.name,
            topic: taskObj.topic,
            status: taskObj.status
        }
        tasksDB.push(newTask)
        return newTask
    }
    const newTask = {
        id:tasksDB[tasksDB.length -1].id + 1,
        name : taskObj.name,
        topic: taskObj.topic,
        status: taskObj.status
    }
    tasksDB.push(newTask)
    return newTask
    
}
/////////////////////////////////////////////////////


////////////////////////////////////////////////////
const getTaskById = (id) => {
    const filteredById = tasksDB.filter((task) => task.id === id)
    return filteredById[0]
}
///////////////////////////////////////////////////

///////////////////////////////////////////////////
const updateById = (id, taskObj) => {
    const taskIndex = tasksDB.findIndex((obj) => obj.id === id)
    if(taskObj.name && taskObj.topic && taskObj.status){
        tasksDB[taskIndex] = {
            id: tasksDB[taskIndex].id,
            name: tasksDB[taskIndex].name,
            topic: tasksDB[taskIndex].topic,
            status: taskObj.status           
        }
    }
    return tasksDB
}
//////////////////////////////////////////////////////

/////////////////////////////////////////////////////
const deleteById = (id) => {
    const taskIndex = tasksDB.findIndex(item => item.id === id)
    if(taskIndex !== '1'){
        tasksDB.splice(taskIndex, 1)
        return true
    }else{
        return false
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTaskById,
    updateById,
    deleteById
}