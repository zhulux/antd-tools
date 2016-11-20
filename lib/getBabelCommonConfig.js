module.exports = function getBabelCommonConfig() {
  const babelConfig = require('lutool-build/lib/getBabelCommonConfig')();

  babelConfig.plugins.push([require.resolve('babel-plugin-transform-runtime'),
    { polyfill: false }]);
  return babelConfig;
};
