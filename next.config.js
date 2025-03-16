/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    path: process.env.NODE_ENV === 'production' ? '/robert_photo/_next/image' : '/_next/image',
    loader: 'custom',
    loaderFile: './src/utils/imageLoader.ts',
  },
  basePath: process.env.NODE_ENV === 'production' ? '/robert_photo' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/robert_photo' : '',
  trailingSlash: true,
  distDir: 'dist',
};

module.exports = nextConfig; 