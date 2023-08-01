/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  }

}

module.exports = nextConfig

// lista de packages que ja vem no bundle do next13
// https://nextjs.org/docs/app/api-reference/next-config-js/serverComponentsExternalPackages