const path = require('path')

/**
 * @param {import('webpack').Configuration} config 
 * @returns 
 */
module.exports = function override(config) {
  config.resolve.alias['@'] = path.resolve(__dirname, 'src/')

  return config;
}