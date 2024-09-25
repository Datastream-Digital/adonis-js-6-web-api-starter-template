import env from '#start/env'
import { PostgreSqlContainer } from '@testcontainers/postgresql'
// import { GenericContainer } from 'testcontainers'

if (env.get('TESTCONTAINERS_ENABLED', true)) {
  console.log('[ info ] creating testcontainers for postgresql')

  let start = performance.now()
  const postgresContainer = await new PostgreSqlContainer('postgres:15.6-alpine').start()
  env.set('DB_HOST', postgresContainer.getHost())
  env.set('DB_PORT', String(postgresContainer.getPort()))
  env.set('DB_USER', postgresContainer.getUsername())
  env.set('DB_PASSWORD', postgresContainer.getPassword())
  env.set('DB_DATABASE', postgresContainer.getDatabase())
  let end = performance.now()

  console.log(`[ info ] testcontainers created (${((end - start) / 1000).toFixed(2)} seconds)`)

  // console.log('[ info ] creating testcontainers for local stack')
  // start = performance.now()
  // const port = 4566
  // const localStackContainer = await new GenericContainer('localstack/localstack')
  //   .withExposedPorts(port)
  //   .start()

  // const endpoint = `http://${localStackContainer.getHost()}:${localStackContainer.getMappedPort(port)}`

  // env.set('AWS_SQS_URL', endpoint)

  // console.log(`[ info ] testcontainers created (${((end - start) / 1000).toFixed(2)} seconds)`)
}
