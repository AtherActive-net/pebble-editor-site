const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    prependData: `@import "${path.join(__dirname, 'src/styles/functions.scss')}";
    @import "${path.join(__dirname, 'src/styles/variables.scss')}";`
  }
}

module.exports = nextConfig
