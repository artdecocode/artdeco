import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import artdeco from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof artdeco, 'function')
  },
  async 'calls package without error'() {
    await artdeco()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await artdeco({
      type: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T
