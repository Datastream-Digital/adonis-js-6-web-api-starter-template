import { RouteGroup } from '@adonisjs/core/http'
import { HttpRouterService } from '@adonisjs/core/types'

export function registerDevelopmentRoutes(router: HttpRouterService): RouteGroup {
  const DevelopmentsController = () => import('#controllers/developments_controller')

  return router
    .group(() => {
      router
        .post('migration-fresh-with-seed', [DevelopmentsController, 'migrationFreshWithSeed'])
        .as('migration-fresh-with-seed')
    })
    .prefix('developments')
    .as('developments')
}
