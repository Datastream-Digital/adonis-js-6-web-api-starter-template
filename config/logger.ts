import env from '#start/env'
import { defineConfig, targets } from '@adonisjs/core/logger'
import app from '@adonisjs/core/services/app'

const loggerConfig = defineConfig({
  default: 'app',

  /**
   * The loggers object can be used to define multiple loggers.
   * By default, we configure only one logger (named "app").
   */
  loggers: {
    app: {
      enabled: true,
      name: env.get('APP_NAME'),
      level: env.get('LOG_LEVEL'),
      transport: {
        targets: targets()
          .pushIf(!app.inProduction, targets.pretty())
          .pushIf(env.get('SEQ_LOGGING_ENABLED', false), {
            target: '@autotelic/pino-seq-transport',
            options: {
              loggerOpts: {
                serverUrl: `${env.get('SEQ_SERVER_HOST')}:${env.get('SEQ_SERVER_PORT')}`,
              },
            },
          })
          .pushIf(app.inProduction, targets.file({ destination: 1 }))
          .toArray(),
      },
    },
  },
})

export default loggerConfig

/**
 * Inferring types for the list of loggers you have configured
 * in your application.
 */
declare module '@adonisjs/core/types' {
  export interface LoggersList extends InferLoggers<typeof loggerConfig> {}
}
