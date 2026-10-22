# Node Backend App Template

A clean Express.js + MongoDB backend starter template following a FinTrack-style folder structure.

## Features

- Express.js API server
- MongoDB connection with Mongoose
- MVC-style structure
- Routes, controllers, models, middlewares, utils
- Request validation and reusable response helper
- Health check endpoint
- Environment configuration using `.env`

## Folder Structure

```bash
node_backend_app_template/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── userController.js
│   ├── middlewares/
│   │   ├── authMiddleware.js
│   │   └── errorMiddleware.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   ├── index.js
│   │   └── userRoutes.js
│   ├── utils/
│   │   └── apiResponse.js
│   ├── app.js
│   └── server.js
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create environment file:

```bash
cp .env.example .env
```

3. Update MongoDB connection string in `.env`.

4. Run the app:

```bash
npm run dev
```

## API Examples

### Health check

```http
GET /api/health
```

### Users

```http
GET /api/users
POST /api/users
GET /api/users/:id
PUT /api/users/:id
DELETE /api/users/:id
```

## Example User JSON

```json
{
  "name": "Naveen",
  "email": "naveen@example.com",
  "role": "admin"
}
```

## Notes

This template is ready to extend with auth, JWT, project modules, and business logic similar to a FinTrack server structure.
