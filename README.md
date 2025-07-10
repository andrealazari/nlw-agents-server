# NLW Agents

A study project developed during the Rocketseat NLW (Next Level Week) event, focusing on building an AI agents system with modern web technologies.

## 🚀 Technologies

### Core Framework
- **Fastify** - High-performance web framework for Node.js
- **TypeScript** - Type-safe JavaScript development

### Database & ORM
- **PostgreSQL** - Primary database with pgvector extension for vector operations
- **Drizzle ORM** - Type-safe SQL toolkit and ORM
- **Drizzle Kit** - Database migrations and schema management

### Validation & Type Safety
- **Zod** - TypeScript-first schema validation
- **Fastify Type Provider Zod** - Zod integration for Fastify

### Development Tools
- **Biome** - Fast formatter and linter
- **Docker Compose** - Local PostgreSQL database setup

## 📁 Project Structure

```
src/
├── server.ts          # Fastify server setup
├── env.ts            # Environment validation
└── db/
    ├── connection.ts  # Database connection
    ├── schema/        # Database schemas
    ├── migrations/    # Database migrations
    └── seed.ts        # Database seeding
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+
- Docker and Docker Compose
- Git

### 1. Clone and Install Dependencies
```bash
git clone <repository-url>
cd server
npm install
```

### 2. Environment Setup
Create a `.env` file in the root directory:
```env
PORT=3333
DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
```

### 3. Database Setup
Start the PostgreSQL database with Docker:
```bash
docker-compose up -d
```

### 4. Database Migrations
Run database migrations:
```bash
npx drizzle-kit migrate
```

### 5. Seed Database (Optional)
Populate the database with initial data:
```bash
npm run db:seed
```

### 6. Start Development Server
```bash
npm run dev
```

The server will be available at `http://localhost:3333`

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run start` - Start production server
- `npm run db:seed` - Seed database with initial data

## 🔧 Development

### Code Quality
The project uses Biome for code formatting and linting. Run:
```bash
npx @biomejs/biome format --write .
npx @biomejs/biome lint .
```

### Database Management
- Generate migrations: `npx drizzle-kit generate`
- Push schema changes: `npx drizzle-kit push`
- View database: `npx drizzle-kit studio`

## 🏗️ Architecture Patterns

- **Type-Safe API** - Full TypeScript integration with Zod validation
- **Database-First** - Schema-driven development with Drizzle ORM
- **Environment Validation** - Runtime environment variable validation
- **CORS Configuration** - Configured for frontend development
- **Vector Database** - PostgreSQL with pgvector for AI/ML features

## 📝 About

This project was developed as part of the Rocketseat NLW (Next Level Week) event, focusing on modern web development practices and AI agent systems. It serves as a learning platform for TypeScript, Fastify, and database management with Drizzle ORM. 