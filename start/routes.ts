/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').redirect('/swagger/docs')
router.get('/health', [() => import('#controllers/health_checks_controller')])

router.registerSwaggerRoutes()
