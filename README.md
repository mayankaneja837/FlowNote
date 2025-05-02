# FlowNote

FlowNote is a platform for creating, publishing, and reading blogs. It consists of a **Frontend** built with React, TypeScript, and Vite, and a **Backend** powered by Hono, Prisma, and Cloudflare Workers.

---

## Features

### Frontend
- **React + TypeScript**: A modern frontend stack for building scalable and maintainable UI.
- **TailwindCSS**: For styling the application with utility-first CSS.
- **React Router**: For client-side routing.
- **Axios**: For making API requests to the backend.
- **Pages**:
  - **Landing Page**: A simple introduction to FlowNote.
  - **Signup/Signin**: User authentication pages.
  - **Blogs**: View all blogs.
  - **Blog**: View a single blog.
  - **Publish**: Create and publish a new blog.

### Backend
- **Hono Framework**: A lightweight web framework for building APIs.
- **Prisma**: ORM for managing the PostgreSQL database.
- **JWT Authentication**: Secure user authentication using JSON Web Tokens.
- **Cloudflare Workers**: Serverless backend deployment.
- **Endpoints**:
  - **User**:
    - `/signup`: Register a new user.
    - `/signin`: Authenticate an existing user.
  - **Blog**:
    - `/submit`: Create a new blog.
    - `/update`: Update an existing blog.
    - `/bulk`: Fetch all blogs.
    - `/:id`: Fetch a single blog by ID.

---

## Installation

### Prerequisites
- Node.js (v18+)
- PostgreSQL database
- Cloudflare Workers CLI (`wrangler`)

### Clone the Repository
```bash
git clone https://github.com/mayankaneja837/FlowNote.git
cd FlowNote
```

### Setup Frontend
1. Navigate to the frontend directory:
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

### Setup Backend
1. Navigate to the backend directory:
   ```bash
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up the database:
   - Update the `DATABASE_URL` in your environment variables.
   - Run Prisma migrations:
     ```bash
     npx prisma migrate dev
     ```
4. Start the development server:
   ```bash
   npm run dev
   ```

---

## Deployment

### Frontend
1. Build the frontend:
   ```bash
   npm run build
   ```
2. Deploy the `dist` folder to your hosting provider.

### Backend
1. Deploy to Cloudflare Workers:
   ```bash
   npm run deploy
   ```

---

## Project Structure

```
FlowNote/
├── Backend/          # Backend code
│   ├── prisma/       # Prisma schema and migrations
│   ├── src/          # Source code for backend
│   └── package.json  # Backend dependencies
├── Frontend/         # Frontend code
│   ├── src/          # Source code for frontend
│   ├── public/       # Static assets
│   └── package.json  # Frontend dependencies
└── common/           # Shared code (e.g., validation schemas)
```

---

## Environment Variables

### Backend
- `DATABASE_URL`: PostgreSQL connection string.
- `JWT_SECRET`: Secret key for signing JWTs.

---

## Scripts

### Frontend
- `npm run dev`: Start the development server.
- `npm run build`: Build the frontend for production.
- `npm run lint`: Run ESLint.

### Backend
- `npm run dev`: Start the backend in development mode.
- `npm run deploy`: Deploy the backend to Cloudflare Workers.

---

## License

This project is licensed under the ISC License.

---

## Author

Developed by **Mayank Aneja**.