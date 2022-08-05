const path = require('path')

console.log(process.env.NODE_ENV)

/**
 * @param {import('webpack').Configuration} config 
 * @returns 
 */
module.exports = function override(config) {
  if (process.env.NODE_ENV === 'production') {
    config.output.publicPath = '/react-use/'
  }
  config.resolve.alias['@'] = path.resolve(__dirname, 'src/')
  return config;
}