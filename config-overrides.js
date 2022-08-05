const path = require('path')

module.exports = {
  /**
   * @param {import('webpack').Configuration} config 
   * @returns 
   */
  webpack(config) {
    if (process.env.NODE_ENV === 'production') {
      config.output.publicPath = '/react-use/'
    }
    config.resolve.alias['@'] = path.resolve(__dirname, 'src/')
    return config
  },
}
