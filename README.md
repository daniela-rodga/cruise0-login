# 🚢 Cruise0 Login App

A responsive, Auth0-secured login app for Cruise0, built with Vite + React.

## ✨ Features

- Universal Login via Auth0
- Custom error handling for unverified emails
- Responsive design with custom branding
- Smooth logout and retry flow
- Easily deployable to Vercel or Netlify

## 🧠 Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Auth0](https://auth0.com/)
- CSS

---

## 🚀 How to Run Locally

1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/cruise0-login.git
   cd cruise0-login

2. Install dependencies
    npm install

3. Create a .env file (use .env.example as an starter)
    VITE_AUTH0_DOMAIN=your-tenant.auth0.com
    VITE_AUTH0_CLIENT_ID=your-client-id

4. Run the app locally
    npm run dev

Your app will be available at http://localhost:5173 (usually). 

## 💻 Run this on the Web
Access to  https://cruise0-login.vercel.app to see the project running live!

## Important Notes
Please be sure to add your localhost:port URL or any other URL you may be using (in case of deploying this through a third party service such as vercel, heroku, etc.) to your Allowed Callback/Logout and Web Origins URLs in your Auth0 Application Dashboard when run this project locally. 
