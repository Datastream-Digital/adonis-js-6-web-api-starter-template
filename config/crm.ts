import env from '#start/env'
import { crmServiceConfigFactory } from '@crm/common/config/crm'

const crmService = crmServiceConfigFactory(env.get('CRM_BACKEND_URL'), env)

export default crmService