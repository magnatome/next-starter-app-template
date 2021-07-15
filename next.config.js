// Next.js configuration
// You can add advanced behavior here https://nextjs.org/docs/api-reference/next.config.js/introduction

module.exports = {
  // If you deploy to Netlify, target must be "serverless"
  // target: 'serverless',

  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Fixes packages that depend on fs/module module
      // eslint-disable-next-line
      config.resolve.fallback.fs = false
    }
    return config
  },
}
