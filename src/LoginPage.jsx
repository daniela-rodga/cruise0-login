import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './LoginPage.css';

export default function LoginPage({ loginError }) {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <div className="login-container">
      <div className="login-content">
        <img src="/cruise0-logo.png" alt="Cruise0 Logo" className="logo" />
        <h1>Board Your Next Escape</h1>
        <p>Let’s Cruise into Something Amazing</p>

        {/*Error Message if Email Not Verified */}
        {loginError && (
          <div className="login-error">
            ⚠️ {loginError}
          </div>
        )}

        {!isAuthenticated ? (
          <button
          onClick={() => {
            sessionStorage.removeItem('loginErrorShown'); //  Allow new error
            loginWithRedirect();
            }}
          >
            Login / Sign Up
          </button>
        
        ) : (
          <>
            <h2>Welcome, {user.name}!</h2>
            <button
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
          </>
        )}
      </div>
    </div>
  );
}
