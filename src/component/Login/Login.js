import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';


const Login = () => {
    const {loginWithGoogle, user,handleLogout} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    console.log(user);
    console.log(user.emailVerified);

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    
    return (
        <div className="text-center mt-5">
            {
                user.email?<h4 className="mb-3">Sign Out</h4>:<h4 className="mb-3">SignIn With Google</h4>
            }
            
            {
                user.email?<button className="btn btn-danger" onClick={handleLogout}>Sign Out</button>:<button className="btn btn-primary" onClick={handleGoogleLogin}>SignIn With Google</button>
            }
        </div>
    );
};

export default Login;