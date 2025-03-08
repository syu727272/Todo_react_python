# FastAPI + React TODO Application

A simple TODO application built with FastAPI for the backend and React for the frontend.

## Project Structure

```
todo-app/
├── backend/            # FastAPI backend
│   ├── database.py     # Database connection and session management
│   ├── main.py         # FastAPI application and endpoints
│   ├── models.py       # SQLAlchemy models
│   ├── requirements.txt # Python dependencies
│   └── schemas.py      # Pydantic schemas for request/response validation
│
└── frontend/           # React frontend
    └── todo-app-frontend/
        ├── public/     # Static files
        └── src/        # React source code
            ├── components/  # React components
            ├── services/    # API services
            ├── App.tsx      # Main application component
            ├── index.tsx    # Application entry point
            └── types.ts     # TypeScript type definitions
```

## Backend Setup

1. Navigate to the backend directory:
   ```
   cd todo-app/backend
   ```

2. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```

3. Start the FastAPI server:
   ```
   uvicorn main:app --reload
   ```

4. The API will be available at http://localhost:8000
   - Swagger UI documentation: http://localhost:8000/docs
   - ReDoc documentation: http://localhost:8000/redoc

## Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd todo-app/frontend/todo-app-frontend
   ```

2. Install the required dependencies:
   ```
   npm install
   ```

3. Start the React development server:
   ```
   npm start
   ```

4. The application will be available at http://localhost:3000

## API Endpoints

- `GET /todos` - Get all todos
- `POST /todos` - Create a new todo
- `GET /todos/{todo_id}` - Get a specific todo
- `PUT /todos/{todo_id}` - Update a specific todo
- `PUT /todos/{todo_id}/toggle` - Toggle the completed status of a todo
- `DELETE /todos/{todo_id}` - Delete a specific todo

## Features

- Create, read, update, and delete todos
- Mark todos as completed
- Responsive design
- Real-time updates

## Technologies Used

- **Backend**:
  - FastAPI
  - SQLAlchemy
  - Pydantic
  - SQLite

- **Frontend**:
  - React
  - TypeScript
  - Axios
