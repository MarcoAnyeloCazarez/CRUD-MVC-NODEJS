const router = require('express').Router() //Importo express y su argumento Router y lo inicio
const httpTasks = require('./tasks.http')


router.route('/tasks')
    .get(httpTasks.getAll)


module.exports = {
    router
}