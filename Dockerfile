# Build stage
FROM node:18-slim AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Run stage
FROM node:18-slim

WORKDIR /app

# Only copy what's needed for the server
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.js ./
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/assets ./assets

# Install only production dependencies for the Express server
RUN npm install --production

# Expose the port Cloud Run will use
EXPOSE 8080

# Update server.js to serve from dist
CMD ["node", "server.js"]
