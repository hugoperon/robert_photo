/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/robert_photo' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/robert_photo' : '',
  trailingSlash: true,
  distDir: 'dist',
};

module.exports = nextConfig; 