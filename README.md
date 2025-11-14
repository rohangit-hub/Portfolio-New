# Portfolio Project 11/14/2025

A modern, responsive portfolio website built with React (Vite) frontend and Node.js/Express backend. This project showcases your skills, projects, and provides a contact form with email functionality.

## 🚀 Features

- **Modern React Frontend**: Built with React 19.1.0 and Vite for fast development
- **Responsive Design**: Styled with Tailwind CSS for mobile-first responsive design
- **Contact Form**: Functional contact form with email sending capability
- **Portfolio Showcase**: Display your projects, skills, and about information
- **Email Integration**: Nodemailer integration for contact form submissions
- **Database Ready**: MongoDB integration for future data storage needs

## 📁 Project Structure

```
Portfolio_New_React+Jsx/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── about/      # About section component
│   │   │   ├── contact/    # Contact form component
│   │   │   ├── footer/     # Footer component
│   │   │   ├── home/       # Home/Hero section component
│   │   │   ├── navbar/     # Navigation component
│   │   │   ├── project/    # Projects showcase component
│   │   │   └── skill/      # Skills section component
│   │   ├── assets/         # Images and static files
│   │   ├── App.jsx         # Main App component
│   │   └── main.jsx        # React entry point
│   ├── public/             # Public static files
│   ├── package.json        # Frontend dependencies
│   └── vite.config.js      # Vite configuration
├── server/                 # Backend Node.js application
│   ├── index.js            # Main server file
│   ├── db.js              # MongoDB connection setup
│   ├── mailTransporter.js # Email configuration
│   └── package.json       # Backend dependencies
└── README.md              # Project documentation
```

## 🛠️ Tech Stack

### Frontend
- **React** 19.1.0 - JavaScript library for building user interfaces
- **Vite** 7.0.4 - Fast build tool and development server
- **Tailwind CSS** 4.1.11 - Utility-first CSS framework
- **Axios** 1.11.0 - HTTP client for API requests

### Backend
- **Node.js** - JavaScript runtime environment
- **Express** 5.1.0 - Web application framework
- **MongoDB** with Mongoose 8.17.0 - Database and ODM
- **Nodemailer** 7.0.5 - Email sending functionality
- **CORS** 2.8.5 - Cross-origin resource sharing

## ⚙️ Environment Variables

The server requires several environment variables to function properly. Create a `.env` file in the `server/` directory with the following variables:

### Required Environment Variables

```env
# Server Configuration
PORT=5000

# Database Configuration
MONGO_URI=mongodb://localhost:27017
DB_NAME=portfolio_db

# Email Configuration (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Email Addresses
SENDER_EMAIL=your-email@gmail.com
RECEIVER_EMAIL=your-receiving-email@gmail.com
```

### Environment Variables Explanation

| Variable | Description | Example Value |
|----------|-------------|---------------|
| `PORT` | Port number where the server will run | `5000` |
| `MONGO_URI` | MongoDB connection string | `mongodb://localhost:27017` or `mongodb+srv://cluster.mongodb.net` |
| `DB_NAME` | Name of the MongoDB database | `portfolio_db` |
| `SMTP_HOST` | SMTP server hostname | `smtp.gmail.com` (for Gmail) |
| `SMTP_PORT` | SMTP server port number | `587` (for TLS) or `465` (for SSL) |
| `SMTP_USER` | Email address for SMTP authentication | `your-email@gmail.com` |
| `SMTP_PASS` | Email password or app password | `your-app-password` |
| `SENDER_EMAIL` | Email address that will send the emails | `your-email@gmail.com` |
| `RECEIVER_EMAIL` | Email address that will receive contact form submissions | `your-receiving-email@gmail.com` |

### Email Setup Instructions

For Gmail SMTP:
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password (not your regular password)
3. Use the App Password in the `SMTP_PASS` variable

For other email providers, update the `SMTP_HOST` and `SMTP_PORT` accordingly.

### 🔒 Security Notes

**IMPORTANT**: Never commit your `.env` file to version control!

- Add `.env` to your `.gitignore` file
- Use placeholder values in documentation
- For MongoDB Atlas, include credentials in the connection string: `mongodb+srv://username:password@cluster.mongodb.net`
- Store production environment variables securely in your hosting platform
- Use strong, unique passwords for all services
- Enable 2FA on all accounts (especially email and database services)

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local installation or MongoDB Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd Portfolio_New_React+Jsx
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../server
   npm install
   ```

4. **Environment Setup**
   ```bash
   # Create .env file in server directory
   cd server
   cp .env.example .env  # if you have an example file
   # OR create .env file manually and add the environment variables listed above
   
   # IMPORTANT: Add .env to .gitignore to prevent committing sensitive data
   echo ".env" >> .gitignore
   ```

5. **Database Setup**
   - Install MongoDB locally or create a MongoDB Atlas account
   - Update the `MONGO_URI` and `DB_NAME` in your `.env` file

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd server
   npm run dev    # For development with nodemon
   # OR
   npm start      # For production
   ```

2. **Start the Frontend Development Server**
   ```bash
   cd client
   npm run dev
   ```

3. **Access the Application**
   - Frontend: `http://localhost:5173` (Vite default)
   - Backend API: `http://localhost:5000/api/v1`

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/` | Health check - returns a "we are live" image |
| POST | `/api/v1/send-email` | Send contact form email |

### Contact Form API

**POST** `/api/v1/send-email`

Request body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I would like to connect with you."
}
```

Response:
- **200**: Email sent successfully
- **500**: Error sending email

## 🔧 Available Scripts

### Frontend (client/)
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend (server/)
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm run build` - Install dependencies and set up development environment

## 🎨 Customization

### Adding New Sections
1. Create a new component in `client/src/components/`
2. Import and add it to `App.jsx`
3. Style with Tailwind CSS classes

### Modifying Content
- Update component files in `client/src/components/`
- Replace images in `client/src/assets/`
- Modify styles in respective `.css` files

### Database Integration
The MongoDB connection is set up but not actively used. You can:
1. Create schemas in a `models/` directory
2. Add database operations in your routes
3. Store contact form submissions, portfolio data, etc.

## 🚦 Deployment

### Frontend Deployment (Netlify/Vercel)
1. Build the project: `cd client && npm run build`
2. Deploy the `dist/` folder

### Backend Deployment (Heroku/Railway/Digital Ocean)
1. Set environment variables on your hosting platform
2. Update MongoDB URI to your cloud database
3. Deploy the server code

### Environment Variables for Production
Make sure to set all environment variables in your production environment.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🐛 Troubleshooting

### Common Issues

1. **Email not sending**
   - Check SMTP credentials
   - Verify firewall settings
   - Ensure 2FA and app password for Gmail

2. **Database connection failed**
   - Verify MongoDB is running
   - Check MONGO_URI format
   - Ensure network connectivity

3. **Frontend not connecting to backend**
   - Check if backend server is running
   - Verify CORS configuration
   - Check API endpoint URLs

## 📞 Support

If you encounter any issues or have questions, please open an issue in this repository.

---

**Happy Coding! 🚀** 