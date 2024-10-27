/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { registerDevelopmentRoutes } from './routes/development.js'

router.on('/').redirect('/swagger/docs')

router.registerSwaggerRoutes()
registerDevelopmentRoutes(router)
