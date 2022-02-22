const path = require('path');
const withNextEnv = require('next-env');
const { withPlugins } = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/**
 * Next Config Options
 * @type {import('next').NextConfig} */
const nextConfig = {
  env: {
  },

  poweredByHeader: false,

  trailingSlash: true,

  experimental: { granularChunks: true },

  images: {
    domains: [], 
  },

  sassOptions: {
    includePaths: [path.resolve(__dirname, 'node_modules')],
  },

  compress: true,

  webpack: (config, { dev, webpack }) => {
    if (dev) {
      config.watchOptions.poll = 1000;
      config.watchOptions.aggregateTimeout = 300;
      config.mode = 'development';
      config.devtool = 'eval-source-map';
    } else {
      config.mode = 'production';
      config.devtool = 'hidden-source-map';
    }

    return {
      ...config,
      plugins: [
        ...config.plugins,
      ],
    };
  },

};

const composeEnhancers = [withNextEnv, withBundleAnalyzer];

module.exports = withPlugins(composeEnhancers, nextConfig);
