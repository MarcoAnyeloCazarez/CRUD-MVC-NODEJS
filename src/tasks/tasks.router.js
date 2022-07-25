const router = require('express').Router() //Importo express y su argumento Router y lo inicio
const httpTasks = require('./tasks.http')


router.route('/tasks')
    .get(httpTasks.getAll)
    .post(httpTasks.newTask)

router.route('/task/:id')
    .get(httpTasks.getById)
    .put(httpTasks.updateStatus)
    .delete(httpTasks.deleteTask)


module.exports = {
    router
}