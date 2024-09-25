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
import { registerSwaggerRoutes } from './routes/swagger.js'

router.on('/').redirect('/api/swagger/docs')

router
  .group(() => {
    registerSwaggerRoutes(router)
    registerDevelopmentRoutes(router)
  })
  .prefix('api')
  .as('api')
