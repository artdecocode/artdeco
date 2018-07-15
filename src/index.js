import { debuglog } from 'util'

const LOG = debuglog('artdeco')

/**
 * Manage application in the cloud.
 * @param {Config} config Configuration object.
 * @param {string} config.type The type.
 */
export default async function artdeco(config = {}) {
  const {
    type,
  } = config
  LOG('artdeco called with %s', type)
  return type
}

/**
 * @typedef {Object} Config
 * @property {string} type The type.
 */
