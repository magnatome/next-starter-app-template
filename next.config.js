// Next.js configuration

module.exports = {
  // For @netlify/plugin-nextjs, target must be "serverless"
  target: 'serverless',

  webpack: (config, { isServer }) => {
    // Fixes packages that depend on fs/module module
    if (!isServer) {
      return {
        ...config,
        resolve: {
          ...config.resolve,
          fallback: {
            ...config.resolve.fallback,
            fs: false,
          },
        },
      }
    }

    return config
  },
}
