# Note-Taking App

A simple note-taking application built with React (frontend) and Node.js + Express (backend), using SQLite with Prisma ORM.  Requires Node.js 18.18 or higher.

## Setup Instructions

### 1. Install Dependencies
Run the following commands to install required dependencies:
```sh
cd backend && npm install
cd ../frontend && npm install
```

### 2. Setup Database
Run the following command inside the `backend/` directory to initialize the SQLite database:
```sh
npx prisma migrate dev --name init
```

### 3. Start the Application
Run the backend and frontend servers:

**Start Backend:**
```sh
cd backend
npm run dev
```

**Start Frontend:**
```sh
cd frontend
npm run dev
```

The frontend should now be available at `http://localhost:3000`.


### 4. Testing the App
- Open `http://localhost:3000` in your browser.
- Add a note and confirm it appears in the list.

