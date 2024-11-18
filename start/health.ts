import { HealthChecks } from '@adonisjs/core/health'
import { DbCheck } from '@adonisjs/lucid/database'
import db from '@adonisjs/lucid/services/db'

export const healthChecks = new HealthChecks().register([new DbCheck(db.connection())])
