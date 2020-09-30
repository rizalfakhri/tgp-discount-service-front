import React from "react";
import { Route } from "react-router-dom";
import { useAuth } from "./context/auth";
import PleaseAuthenticate from './pages/PleaseAuthenticate'

function AuthenticatedRoute({ component: Component, ...rest }) {
  const isAuthenticated = useAuth();

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <PleaseAuthenticate />
        )
      }
    />
  );
}

export default AuthenticatedRoute;
