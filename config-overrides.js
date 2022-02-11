const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@root': 'src/root',
    '@shared': 'src/shared',
    '@ApiStore': 'src/shared/store/ApiStore',
    '@store': 'src/store',
    '@GitHubStore': 'src/store/GitHubStore',
  })(config);

  return config;
};
