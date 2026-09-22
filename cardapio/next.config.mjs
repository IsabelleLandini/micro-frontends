import { NextFederationPlugin } from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack: (config, options) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: "cardapio",
        filename: "static/chunks/remoteEntry.js",

        exposes: {
          "./Prato": "./components/Prato.js",
        },
      })
    )
    return config;
  },
};

export default nextConfig;
