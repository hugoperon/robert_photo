/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/robert_photo',
  assetPrefix: '/robert_photo',
  trailingSlash: true,
  distDir: 'dist',
};

module.exports = nextConfig; 