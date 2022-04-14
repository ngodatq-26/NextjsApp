/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env : {
    MONGO_URI : 'mongodb+srv://ngoquangdatjpnd:Datdatdat@cluster0.ynxku.mongodb.net/AppNextjs?retryWrites=true&w=majority',
    MONGO_DB : 'AppNextjs'
  }
}

module.exports = nextConfig
