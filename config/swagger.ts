import { swaggerConfigFactory } from '@crm/common/config/swagger'

const swagger = swaggerConfigFactory(import.meta.url, '{{ project_name_for_human }}')

export default swagger
