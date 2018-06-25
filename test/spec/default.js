import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import testt from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof testt, 'function')
  },
  async 'calls package without error'() {
    await testt()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await testt({
      type: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T
