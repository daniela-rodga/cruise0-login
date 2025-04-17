import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginPage from './LoginPage';
import HomePage from './HomePage';

function App() {
  const { isAuthenticated, isLoading, user, error, logout } = useAuth0();
  const [loginError, setLoginError] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const errorParam = params.get('error');
    const errorDesc = params.get('error_description');
    const errorAlreadyShown = sessionStorage.getItem('loginErrorShown');

    if (!isAuthenticated && errorParam && errorDesc && !errorAlreadyShown) {
      const decoded = decodeURIComponent(errorDesc);
      setLoginError(decoded);
      sessionStorage.setItem('loginErrorShown', 'true');

      // Delay logout slightly to allow error message to render
      setTimeout(() => {
        logout({ logoutParams: { returnTo: window.location.origin } });
      }, 2500); // 2500ms, aproximately 2.5s

      // Clean the URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }

    if (!isAuthenticated && error && !errorAlreadyShown) {
      setLoginError(error.message);
      sessionStorage.setItem('loginErrorShown', 'true');
    }
  }, [error, isAuthenticated, logout]);

  return isLoading ? (
    <div>Loading...</div>
  ) : isAuthenticated ? (
    <HomePage />
  ) : (
    <LoginPage loginError={loginError} />
  );
}

export default App;

