# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
The repository hosts a full‑stack journal publishing platform consisting of:
- **Client** – a Next.js 16 application (`client/`) using the App Router, Tailwind CSS, Radix UI and Axios for API calls.
- **Server** – a Node.js/Express TypeScript API (`server/`) exposing REST endpoints for articles, authors, reviews, publications, and background workers.

Both parts are developed and run independently but share the same data model via MongoDB.

## Common Development Commands
### Client (`client/`)
- `npm install` – install dependencies (run once).
- `npm run dev` – start Next.js development server (http://localhost:3000).
- `npm run build` – compile production build.
- `npm start` – serve the production build.
- `npm run lint` – run ESLint.

### Server (`server/`)
- `npm install` – install dependencies (run once).
- `npm run dev` – launch Express server with hot‑reloading (nodemon + ts-node).
- `npm run build` – compile TypeScript to `dist/`.
- `npm start` – run compiled server (`node dist/index.js`).
- `npm run lint` – run ESLint; `npm run lint:fix` to auto‑fix.
- `npm run worker` – start background worker process.
- `npm run seed:admin` – create an initial admin user.
- `npm run clean` – remove compiled output.

## High‑Level Architecture
### Client
- `src/app/` – App Router layout, pages, and server components.
- `src/components/` – reusable UI components.
- `src/services/` – API wrappers (Axios) interacting with the server.
- Styling via Tailwind CSS; UI primitives from Radix UI.

### Server
- `src/app.ts` – creates and configures the Express app.
- `src/index.ts` – entry point that starts the server.
- `src/routes/` – groups of endpoint definitions.
- `src/controllers/` – request handling logic.
- `src/services/` – core business logic, separate from controllers.
- `src/middleware/` – authentication, error handling, request parsing.
- `src/model/` & `src/db/` – Mongoose schemas and DB connection.
- Feature modules (`Articles/`, `authors/`, `Publication/`, `Review_System/`, `Reviewers/`).
- `src/worker.ts` – background job runner using Agenda.
- `src/scripts/` – utility scripts (e.g., admin creation, data migrations).

## Testing
The repository does not define explicit test scripts or frameworks. If testing is added, standard commands would follow the conventions of the chosen framework (e.g., `npm test` for Jest). Until then, developers should manually verify behavior via the UI and API endpoints.
