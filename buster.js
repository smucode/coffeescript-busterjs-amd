module.exports['browser'] = {
  environment: 'browser',
  libs: [
    'lib/require.js',
    'conf/require.js'
  ],
  resources: [
    'lib/cs.js',
    'lib/coffee-script.js'
  ],
  sources: [
    'src/*.coffee'
  ],
  tests: [
    'test/*.coffee'
  ],
  extensions: [
    require('buster-amd')
  ],
  'buster-amd': {
    pathMapper: function (path) {
      return 'cs!' + path.replace(/^\//, '').replace(/\.coffee$/, '');
    }
  }
};