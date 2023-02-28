module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/home': { page: '/' },
      '/about': { page: '/about' },
    }
  },
}
