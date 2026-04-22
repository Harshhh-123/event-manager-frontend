# Event Manager - Full Stack Application

## Live Demo
- Frontend: https://event-manager-frontend-fawn.vercel.app
- Backend API: https://github.com/Harshhh-123/event-manager-backend

## Tech Stack
- **Frontend:** React.js, Axios, React Router DOM
- **Backend:** Java, Spring Boot, Spring Data JPA
- **Database:** H2 (In-Memory)
- **Deployment:** Vercel (Frontend)

## Why This Tech Stack
I chose Spring Boot for the backend because of its built-in dependency injection, auto-configuration, and production-ready features. React was chosen for the frontend due to its component-based architecture and fast rendering. H2 in-memory database was used as it requires zero configuration and is acceptable for demo purposes.

## Trade-offs Considered
- H2 is in-memory so data resets on restart — acceptable for demo, PostgreSQL would be used in production
- React CRA used instead of Next.js for simplicity
- No authentication implemented to keep scope focused on core features

## Architecture
- REST API backend (Spring Boot) exposes endpoints at /api/events
- React frontend consumes the API using Axios
- CORS enabled on backend to allow frontend requests

## API Endpoints
- POST /api/events - Create event
- GET /api/events - List all events
- GET /api/events/{id} - Get event by ID
- POST /api/events/{id}/register - Register for event

## Features
- Create events with title, date, type, description
- View all events
- View event details
- Register for events with name and email
- Duplicate registration prevention
- Form validation and error handling

## Setup Instructions
### Backend
1. Open project in IntelliJ
2. Run EventmanagerApplication.java
3. Backend starts at http://localhost:8080

### Frontend
1. cd event-frontend
2. npm install
3. npm start
4. Frontend starts at http://localhost:3000