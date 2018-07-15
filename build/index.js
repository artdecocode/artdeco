"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = artdeco;

var _util = require("util");

const LOG = (0, _util.debuglog)('artdeco');
/**
 * Manage application in the cloud.
 * @param {Config} config Configuration object.
 * @param {string} config.type The type.
 */

async function artdeco(config = {}) {
  const {
    type
  } = config;
  LOG('artdeco called with %s', type);
  return type;
}
/**
 * @typedef {Object} Config
 * @property {string} type The type.
 */
//# sourceMappingURL=index.js.map