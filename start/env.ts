/*
|--------------------------------------------------------------------------
| Environment variables service
|--------------------------------------------------------------------------
|
| The `Env.create` method creates an instance of the Env service. The
| service validates the environment variables and also cast values
| to JavaScript data types.
|
*/

import { Env } from '@adonisjs/core/env'
import { crmServiceEnvVariableSchemas } from '@crm/common/config/crm'

export default await Env.create(new URL('../', import.meta.url), {
  NODE_ENV: Env.schema.enum(['development', 'production', 'test'] as const),
  PORT: Env.schema.number(),
  APP_KEY: Env.schema.string(),
  APP_NAME: Env.schema.string(),
  HOST: Env.schema.string({ format: 'host' }),
  LOG_LEVEL: Env.schema.enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace']),

  TESTCONTAINERS_ENABLED: Env.schema.boolean(),

  TEST_LOGGING_ENABLED: Env.schema.boolean.optional(),
  SEQ_LOGGING_ENABLED: Env.schema.boolean(),
  SEQ_SERVER_HOST: Env.schema.string(),
  SEQ_SERVER_PORT: Env.schema.number(),

  DB_HOST: Env.schema.string(),
  DB_PORT: Env.schema.number(),
  DB_USER: Env.schema.string(),
  DB_PASSWORD: Env.schema.string.optional(),
  DB_DATABASE: Env.schema.string(),

  ...crmServiceEnvVariableSchemas(),
})
