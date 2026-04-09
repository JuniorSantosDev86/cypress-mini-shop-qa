# Cypress Mini Shop

A simple React e-commerce dashboard application built for Cypress testing course demonstrations. This app simulates a basic online shop management system with authentication, product listing, and product creation features.

## 🚀 Features

- **Authentication System**: Login with demo credentials
- **Product Dashboard**: View existing products with loading simulation
- **Add Product**: Form to add new products with validation
- **Protected Routes**: Route protection based on authentication status
- **Responsive Design**: Clean, simple UI optimized for testing

## 📋 Demo Credentials

- **Email**: `admin@test.com`
- **Password**: `admin123`

## 🛠️ Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   # or
   npm run dev
   ```

3. **Access the Application**
   - Open [http://localhost:3000](http://localhost:3000) in your browser
   - You'll be redirected to the login page if not authenticated

## 📁 Project Structure

```
cypress-mini-shop/
├── public/
│   └── index.html              # HTML template
├── src/
│   ├── components/
│   │   └── Navbar.js           # Navigation component
│   ├── pages/
│   │   ├── Login.js            # Login page with authentication
│   │   ├── Dashboard.js        # Product listing page
│   │   └── AddProduct.js       # Add new product form
│   ├── App.js                  # Main app with routing
│   ├── index.js                # Application entry point
│   ├── index.css               # Global styles
│   └── mockData.js             # Mock data for products and users
├── package.json
└── README.md
```

## 🌐 Available Routes

- `/login` - Authentication page (public)
- `/dashboard` - Product listing (protected)
- `/add-product` - Add new product form (protected)
- `/` - Redirects to dashboard if authenticated, login if not

## ⚙️ App Functionality

### Authentication Flow
- Login form validates against hardcoded credentials
- Successful login stores authentication state in localStorage
- Protected routes redirect to login if not authenticated
- Logout clears authentication and redirects to login

### Dashboard Features
- Displays mock product data after 500ms loading simulation
- Shows product cards with name, price, and category
- "Go to Add Product" button for navigation
- Product count display

### Add Product Features
- Form with product name, price, and category fields
- Form validation (all fields required)
- Submit simulation with 500ms delay
- Success message and automatic redirect to dashboard
- Cancel button to return to dashboard

## 🧪 Perfect for Cypress Testing

This app is specifically designed to demonstrate various Cypress testing concepts:

- **Form interactions** (login, add product)
- **Route navigation** and protection
- **Loading states** and async behavior
- **LocalStorage** authentication simulation
- **API simulation** with delays
- **Error handling** (invalid login)
- **Dynamic content** rendering

## 🔧 Technical Details

- **React 18+** with functional components and hooks
- **React Router DOM v6** for client-side routing
- **localStorage** for authentication state persistence
- **setTimeout** for simulating async operations
- **Inline styles** and CSS classes for simple styling
- **No external dependencies** beyond React ecosystem

## 🚀 Available Scripts

- `npm start` / `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 📝 Notes for Testing

- Authentication persists across browser sessions until logout
- Product data is static and resets on page refresh
- All API calls are simulated with setTimeout
- Forms include proper validation and error states
- Navigation includes proper loading and disabled states

---

**Ready for Cypress integration!** 🎯

This app provides a realistic foundation for learning Cypress testing patterns including fixtures, intercepts, custom commands, and session management. 