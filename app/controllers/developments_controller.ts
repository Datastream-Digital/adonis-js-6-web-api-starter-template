import type { HttpContext } from '@adonisjs/core/http'
import ace from '@adonisjs/core/services/ace'

export default class DevelopmentsController {
  /**
   * Migrate and Seed database
   */

  /**
   * @migrateAndSeed
   * @operationId migrationFreshWithSeed
   * @summary Migrate and seed the database
   * @description This endpoint runs database migrations and seeds the database with initial data. It returns a list of migrated files.
   */
  async migrationFreshWithSeed({ logger }: HttpContext) {
    logger.info('running fresh migration with seeding')
    return await ace.exec('migration:fresh', ['--seed'])
  }
}
