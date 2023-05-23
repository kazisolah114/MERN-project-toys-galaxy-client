import React, { createContext, useState, useEffect } from 'react';
import app from '../Firebase/config.firebase';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
    
    const auth = getAuth(app)
    export const AuthContenxt = createContext(null)
const AuthProvider = ({children}) => {
    const [profile, setProfile] = useState({})
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedInUser) => {
            setProfile(loggedInUser)
        }) 
        return () => {
            return unsubscribe;
        }
    }, [])
    const logOutUser = () => {
        return signOut(auth)
    }

    const authInfo = {
        profile,
        createUser,
        signInUser,
        logOutUser,
    }

    return (
        <AuthContenxt.Provider value={authInfo}>
            {children}
        </AuthContenxt.Provider>
    );
};

export default AuthProvider;