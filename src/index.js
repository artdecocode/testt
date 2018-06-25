import { debuglog } from 'util'

const LOG = debuglog('testt')

/**
 * A test package to show the capabilities.
 * @param {Config} config Configuration object.
 * @param {string} config.type The type.
 */
export default async function testt(config = {}) {
  const {
    type,
  } = config
  LOG('testt called with %s', type)
  return type
}

/**
 * @typedef {Object} Config
 * @property {string} type The type.
 */
