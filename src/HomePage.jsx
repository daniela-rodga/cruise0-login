import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './HomePage.css'; // Importing styles

export default function HomePage() {
  const { user, logout } = useAuth0();

  return (
    <div className="homepage-container">
      <h2>Welcome to Cruise0, {user.name}!</h2>
      <p>Your exclusive travel experience begins here.</p>

      <button
        className="logout-button"
        onClick={() =>
          logout({
            logoutParams: {
              returnTo: window.location.origin,
            },
          })
        }
      >
        Logout
      </button>
    </div>
  );
}

