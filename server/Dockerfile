# Multi-stage Dockerfile for backend server

# 1) Build stage: install deps and compile TypeScript
FROM node:18-alpine AS builder
WORKDIR /app

# Enable corepack and pnpm
RUN corepack enable

# Copy package manifest first (better layer caching)
COPY package.json ./
COPY tsconfig.json ./

# Install dependencies (dev deps included for build)
RUN pnpm install --no-frozen-lockfile || pnpm install

# Copy source and build
COPY src ./src
RUN pnpm run build

# Prune to production dependencies only
RUN pnpm prune --prod

# 2) Runtime stage: minimal image with compiled JS and prod deps
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy compiled app and production node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package.json ./

# Expose default port
ENV PORT=5000
EXPOSE 5000

# Start the server
CMD ["node", "dist/server.js"]
