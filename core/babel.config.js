module.exports = function(api) {
  api.cache.never()
  return {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: ['@babel/plugin-proposal-object-rest-spread'],
  }
}
