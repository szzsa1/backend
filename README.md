# Node.js REST API Starter Kit

🚀 A production-ready starter kit for building RESTful APIs with Node.js, Express, Prisma, Zod, and TypeScript. This framework includes a modular structure, middleware support, validation, testing, and more!

## Features
- Modular Structure: Organized into controllers, models, middlewares, and routes.
- TypeScript: Strongly typed codebase for better maintainability.
- Prisma: Modern database toolkit for TypeScript and Node.js.
- Zod: Schema validation for robust input handling.
- Express: Fast and minimalist web framework for Node.js.
- Testing: Integrated with Jest and Supertest for unit and integration testing.
- Nodemon: Automatic server restarts during development.
- Environment Variables: Support for .env files using dotenv.

## Getting Started
Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v18 or higher)

- npm (v9 or higher)

- PostgreSQL (or any other database supported by Prisma)

### Installation
**Clone the repository:**

```bash
git clone https://github.com/gkrisz22/rest-api-starter.git
cd rest-api-starter
```
*Or download the ZIP file.*

**Install dependencies:**

```bash
npm install
```

### Set up the database:

Update the .env file with your database connection string:

```bash
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
Run Prisma migrations:
```

```bash
npx prisma migrate dev --name init
```

Start the development server:

```bash
npm run dev
The server will be running at http://localhost:3000.
```

## Project Structure

```
my-rest-api/
├── src/
│   ├── controllers/          # Route handlers
│   ├── middlewares/          # Custom middlewares
│   ├── models/               # Prisma models and schemas
│   ├── routes/               # Express routes
│   ├── utils/                # Utility functions
│   ├── prisma/               # Prisma configuration
│   ├── types/                # Custom TypeScript types
│   ├── app.ts                # Express app setup
│   └── server.ts             # Server entry point
├── tests/                    # Test files
├── .env                      # Environment variables
├── .env.test                 # Test environment variables
├── package.json
├── tsconfig.json
└── prisma/schema.prisma      # Prisma schema
```

## Available Scripts

- ```npm run dev```: Start the development server with nodemon.

- ```npm start```: Start the production server.

- ```npm run build```: Compile TypeScript to JavaScript.

- ```npm test```: Run tests using Jest.

- ```npm run test:watch```: Run tests in watch mode.