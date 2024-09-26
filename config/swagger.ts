import path from 'node:path'
import url from 'node:url'

export default {
  path: path.dirname(url.fileURLToPath(import.meta.url)) + '/../',
  title: '{{ project_name_for_human }} API',
  version: '1.0.0',
  tagIndex: 2,
  info: {
    title: '{{ project_name_for_human }} API',
    version: '1.0.0',
    description: 'API documentation for {{ project_name_for_human }}',
  },
  snakeCase: true,
  debug: false,
  ignore: ['/', '/api/swagger', '/api/swagger/docs'],
  preferredPutPatch: 'PUT',
  common: {
    parameters: {},
    headers: {},
  },
  securitySchemes: {},
  authMiddlewares: [],
  defaultSecurityScheme: 'BearerAuth',
  persistAuthorization: true,
  showFullPath: false,
}
