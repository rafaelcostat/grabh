/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { i18n } = require('./next-i18next.config.js')

const repo = 'grabh'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

const nextConfig = {
  basePath,
  assetPrefix,
  reactStrictMode: true,
  i18n,
}

module.exports = nextConfig
