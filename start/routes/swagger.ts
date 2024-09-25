import swagger from '#config/swagger'
import { RouteGroup } from '@adonisjs/core/http'
import { HttpRouterService } from '@adonisjs/core/types'
import AutoSwagger from 'adonis-autoswagger'

export function registerSwaggerRoutes(router: HttpRouterService): RouteGroup {
  return router
    .group(() => {
      router
        .get('', async () => {
          return AutoSwagger.default.json(router.toJSON(), swagger)
        })
        .as('json')
      router
        .get('docs', async () => {
          return AutoSwagger.default.ui('/api/swagger', swagger)
        })
        .as('docs')
    })
    .as('swagger')
    .prefix('swagger')
}
