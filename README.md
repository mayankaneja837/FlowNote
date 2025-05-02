# FlowNote

FlowNote is a full-stack application designed to streamline note-taking and blogging. It consists of a backend built with TypeScript and Prisma, a frontend built with React, TypeScript, and Vite, and a shared common module for reusable utilities.

## Project Structure

The project is organized into the following directories:

- **Backend/**: Contains the server-side code, including API routes and database schema.
- **Frontend/**: Contains the client-side code, including React components and pages.
- **Common/**: Shared utilities and configurations used by both the backend and frontend.

## Backend

### Features

- Built with TypeScript and Hono framework.
- Uses Prisma for database management.
- JWT-based authentication for user management.
- RESTful APIs for user and blog operations.

### Setup

1. Navigate to the `Backend/` directory:
   ```bash
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Deployment

To deploy the backend, run:
```bash
npm run deploy
```

### Database

The backend uses Prisma for database management. The schema is defined in `prisma/schema.prisma`, and migrations are stored in the `prisma/migrations/` directory.

## Frontend

### Features

- Built with React, TypeScript, and Vite.
- Tailwind CSS for styling.
- React Router for navigation.
- Axios for API requests.

### Setup

1. Navigate to the `Frontend/` directory:
   ```bash
   cd Frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### ESLint Configuration

The frontend uses ESLint for linting. To expand the ESLint configuration for production applications, follow the steps outlined in `Frontend/eslint.config.js`.

### Vite

The frontend is powered by Vite, which provides fast development and build times. Configuration files include `vite.config.ts` and `tsconfig.app.json`.

## Common

The `Common/` directory contains shared configurations and utilities, such as TypeScript schemas for input validation using Zod.

### Features

- Zod schemas for input validation.
- Shared TypeScript types for consistent data modeling.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push the branch.
4. Open a pull request.

## License

This project is licensed under the MIT License.