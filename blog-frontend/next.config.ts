import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['example.com'],
  },
  i18n: {
    locales: ['en', 'fr', 'es'],
    defaultLocale: 'en',
  },
  webpack: (config, { isServer }) => {
    // Custom webpack configuration
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};

export default nextConfig;