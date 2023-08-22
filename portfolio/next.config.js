/** @type {import('next').NextConfig} */
const nextConfig = {}


module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'pub-ef97786f25314ec9b46b42f7f3d8ba65.r2.dev',
          port: '',
          pathname: '/**',
        },
      ],
    },
    distDir: 'out',
  }
