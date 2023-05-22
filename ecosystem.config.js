module.exports = {
  apps: [
    {
      name: 'pwsbot',
      script: 'npm run pm2start',
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        NODE_OPTIONS: '--unhandled-rejections=warn'
      }
    },
    {
      name: "server",
      script: "node server.js",
      autorestart: true,
      instances: 1,
      restart_delay: 5000
    }
  ],
  max_memory_restart: "256M"
};
