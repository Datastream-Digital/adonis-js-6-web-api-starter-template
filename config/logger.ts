import env from '#start/env'
import { loggerConfigFactory } from '@crm/common/config/logger'

const loggerConfig = loggerConfigFactory({
  name: env.get('APP_NAME'),
  level: env.get('LOG_LEVEL'),
  testLoggingEnabled: env.get('TEST_LOGGING_ENABLED', false),
  seqLoggingEnabled: env.get('SEQ_LOGGING_ENABLED', false),
  seqServerHost: env.get('SEQ_SERVER_HOST'),
  seqServerPort: env.get('SEQ_SERVER_PORT'),
})

export default loggerConfig

/**
 * Inferring types for the list of loggers you have configured
 * in your application.
 */
declare module '@adonisjs/core/types' {
  export interface LoggersList extends InferLoggers<typeof loggerConfig> {}
}
