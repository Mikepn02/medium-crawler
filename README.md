# Fullstack Medium Crawler Demo

A simple fullstack application that lets you browse Medium articles by username.

- Client: React + TypeScript + Vite (Tailwind CSS)
- Server: Node.js + Express + TypeScript (uses rss-parser to read Medium RSS)

## Project Structure

- client — React SPA served by Vite
- server — Express API serving Medium article data

## Prerequisites

- Node.js 18+ (or a compatible version per your environment)
- pnpm (preferred, as both packages specify a pnpm packageManager)

Install pnpm if needed:

- npm: `npm i -g pnpm`
- corepack: `corepack enable` then `corepack prepare pnpm@latest --activate`

## Quick Start

1) Install dependencies

- From the project root, run in each subfolder:
  - `cd server && pnpm install`
  - `cd ../client && pnpm install`

2) Start the API server

- `cd server`
- Create an optional .env file if you want to change the port:
  - `PORT=5000` (default is 5000)
- Start dev server: `pnpm dev`
- The server runs on: `http://localhost:5000`
- Health check: `GET /` -> "Hello World"
- API endpoint: `GET /api/medium/:username`

3) Start the client (Vite dev server)

- `cd client`
- Create a `.env` file (or `.env.local`) and set the API base URL to the server:
  - `VITE_API_URL=http://localhost:5000`
- Start dev server: `pnpm dev`
- The client typically runs on: `http://localhost:5173`

Now open the client in your browser and search for a Medium username.

## API

- GET `/api/medium/:username`
  - Returns: `{ articles: Article[] }`
  - Article shape (server/src/types/article.ts):
    - `title: string`
    - `link: string`
    - `pubDate?: string`
    - `author?: string`
    - `preview?: string` (plain text snippet)
    - `categories?: string[]`

Notes
- CORS is enabled with `origin: "*"` in the server for local development.
- The server fetches Medium RSS via `rss-parser` and extracts a short preview.

## Environment Variables

Server
- `PORT` (optional): defaults to `5000`.

Client
- `VITE_API_URL`: base URL for the API. Defaults to `http://localhost:8000` in code; set this to your server URL (e.g., `http://localhost:5000`).

## Scripts

Client (from `client/`)
- `pnpm dev` — start Vite dev server
- `pnpm build` — type-check and build
- `pnpm preview` — preview production build
- `pnpm lint` — run ESLint

Server (from `server/`)
- `pnpm dev` — start API with nodemon on `src/server.ts`

## Build & Deploy

- Server: compile TypeScript if you add a build step (currently `pnpm dev` runs via nodemon/ts-node tooling). For production, consider adding scripts to transpile to JavaScript and run with Node.
- Client: `pnpm build` generates a production build under `client/dist`.

## Troubleshooting

- Client cannot reach API:
  - Ensure server is running on the expected port (default 5000).
  - Make sure `VITE_API_URL` in `client/.env` matches the running API URL.
- Port conflicts:
  - Change `PORT` in `server/.env`.
  - Vite dev server port can be adjusted via `vite.config.ts` or `--port` flag.

## License

This project is for demo purposes. Use at your discretion.