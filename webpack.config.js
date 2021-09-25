const Dotenv = require('dotenv-webpack');

module.exports = () => {
  const env = dotenv.config().parsed;

  return {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(env)
      })
    ],
  };
};