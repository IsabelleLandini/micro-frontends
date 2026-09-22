import { NextFederationPlugin } from "@module-federation/nextjs-mf";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack: (config, options) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: "pedido",
        filename: "static/chunks/remoteEntry.js",

        exposes: {
          "./Pedido": "./pages/index.js",
        },
      })
    );
    return config;
  },
};

export default nextConfig;
