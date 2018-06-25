"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = testt;

var _util = require("util");

const LOG = (0, _util.debuglog)('testt');
/**
 * A test package to show the capabilities.
 * @param {Config} config Configuration object.
 * @param {string} config.type The type.
 */

async function testt(config = {}) {
  const {
    type
  } = config;
  LOG('testt called with %s', type);
  return type;
}
/**
 * @typedef {Object} Config
 * @property {string} type The type.
 */
//# sourceMappingURL=index.js.map