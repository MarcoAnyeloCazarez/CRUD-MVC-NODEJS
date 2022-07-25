const { getAllTasks } = require('./tasks.controllers')

const getAll = (req, res) => {
    const data = getAllTasks()
    res.status(200).json(data)
}

module.exports = {
    getAll
}