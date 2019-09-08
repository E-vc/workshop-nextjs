const path = require('path');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  cssModules: true,
  webpack: (config) => {
    // Here modify anything you need about the config.
    config.resolve.modules.push(path.resolve('./'));
    // Config of sass-resources-loader
    config.module.rules.push({
      enforce: 'pre',
      test: /.scss$/,
      loader: 'sass-resources-loader',
      options: {
        resources: ['./styles/globals.scss'],
      },
    });
    // Config of svg-react-loader
    config.module.rules.push(
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        loader: 'svg-react-loader',
      },
    );
    return config;
  },
});
