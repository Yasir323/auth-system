# auth-system
Assessment

Sure! Below is an example `README.md` file that you can use to document your Node.js authentication and profile management API project.

---

# Node.js Authentication and Profile Management API

This project is a Node.js backend API that provides user authentication and profile management functionalities. It allows users to register, login, manage their profiles, and set profile visibility (public or private). Admin users have access to both public and private profiles, while normal users can only access public profiles.

## Features

- User registration with email and password
- User login with email and password
- Third-party login (Google OAuth2)
- User profile management (name, bio, phone, email, photo)
- Profile visibility control (public or private)
- Role-based access control (admin vs. normal user)
- JWT-based authentication
- MongoDB database for storing user data

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- Passport.js (for authentication)
- JWT (JSON Web Tokens) for token management
- bcrypt.js for password hashing
- Multer for handling file uploads
- dotenv for environment variable management

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:

   ```bash
   cd node-auth-api
   npm install
   ```

3. Set up environment variables:
   
   Create a `.env` file in the project root directory and add the following:

   ```plaintext
   MONGODB_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   ```

4. Start the server:

   ```bash
   npm start
   ```

   The server will run on `http://localhost:3000` by default.

## API Endpoints

### Authentication

- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Login with email and password.
- `GET /api/auth/logout`: Logout the authenticated user.
- `GET /api/auth/google`: Initiate Google OAuth2 login.
- `GET /api/auth/google/callback`: Callback URL for Google OAuth2 login.
- `GET /api/auth/facebook/callback`: Callback URL for Facebook OAuth2 login.
- `GET /api/auth/twitter/callback`: Callback URL for Twitter OAuth2 login.
- `GET /api/auth/github/callback`: Callback URL for GitHub OAuth2 login.

### User Profile

- `GET /api/user/me`: Get current user profile (requires authentication).
- `PUT /api/user/me`: Update user profile (requires authentication).
- `GET /api/user/public`: List all public profiles.
- `GET /api/user/all`: List all profiles (requires authentication and Admin privileges).

## Usage

1. Register a new user using the `/api/auth/register` endpoint.
2. Login with email and password using the `/api/auth/login` endpoint to obtain a JWT token.
3. Use the obtained token to access protected endpoints (e.g., `/api/user/me`) for profile management.
4. Optionally, use Google OAuth2 login by visiting `/api/auth/google` to authenticate with Google.

## Deployment

This project can be deployed to platforms like Heroku for production use. Set up environment variables in the deployment environment for database connection and JWT secret.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request for any improvements or new features.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to customize the `README.md` file further based on your project's specific details and additional functionalities. This README template provides a basic structure to showcase the project's features, setup instructions, API endpoints, and deployment guidelines.