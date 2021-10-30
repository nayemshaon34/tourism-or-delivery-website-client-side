import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from '../../Firebase/firebase.init';
const provider = new GoogleAuthProvider();
const auth = getAuth();
initializeAuthentication();
const Login = () => {
    return (
        <div>
            <button>SignIn With Google</button>
        </div>
    );
};

export default Login;