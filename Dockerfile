# Path: Dockerfile
FROM ghcr.io/3kmfi6hp/argo-airport-paas:main
WORKDIR /app/bot
COPY . .
RUN NODE_ENV=build && npm install && NODE_ENV=production
RUN npm run build

# CMD ["npm", "start"]
