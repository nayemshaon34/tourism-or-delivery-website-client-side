import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

function PrivateRoute({ children, ...rest }) {
    const {user,isLoading} = useAuth();
    if(isLoading){
      return <div className="text-center mt-3"><Spinner animation="border" /></div>
    }
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  export default PrivateRoute;