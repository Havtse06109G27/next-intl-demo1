/** https://next-intl-docs.vercel.app/docs/getting-started/app-router */
const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withNextIntl({ ...nextConfig });

