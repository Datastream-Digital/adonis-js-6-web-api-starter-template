import app from '@adonisjs/core/services/app'
import testUtils from '@adonisjs/core/services/test_utils'
import { Group } from '@japa/runner/core'
import nock from 'nock'

export class TestUtilities {
  static setupCleanDatabase(group: Group) {
    group.each.setup(() => testUtils.db().truncate())
    group.each.setup(() => testUtils.db().seed())
  }

  static setupCleanDatabaseWithoutSeededData(group: Group) {
    group.each.setup(() => testUtils.db().truncate())
    group.each.setup(async () => {
      //   await User.query().delete()
    })
  }

  static cleanUpNock(group: Group) {
    group.each.teardown(() => nock.cleanAll())
  }

  static containerRestoreAll(group: Group) {
    group.each.teardown(() => app.container.restoreAll())
  }
}
