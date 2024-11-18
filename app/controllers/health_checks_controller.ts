import env from '#start/env'
import { healthChecks } from '#start/health'
import type { HttpContext } from '@adonisjs/core/http'

export default class HealthChecksController {
  async handle({ response }: HttpContext) {
    const report = await healthChecks.run()

    const reportWithName = {
      applicationName: env.get('APP_NAME'),
      ...report,
    }

    if (report.isHealthy) {
      return response.ok(reportWithName)
    }

    return response.serviceUnavailable(reportWithName)
  }
}
