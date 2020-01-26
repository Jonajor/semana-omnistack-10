const { Router } = require('express');
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')
const RemoveController = require('./controllers/RemoveController')
const UpdateController = require('./controllers/UpdateController')

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

routes.delete('/remove', RemoveController.remove);
routes.patch('/update', UpdateController.atualizar);

module.exports = routes;