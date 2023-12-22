/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Config/firebase.config";
import Swal from "sweetalert2";


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // authProviders
    const googleAuthProvider = new GoogleAuthProvider();

    // google login 
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleAuthProvider)
    }

    // create user 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = async () => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, sign out!'
        });
        if (result.isConfirmed) {
            signOut(auth);
            Swal.fire(
                'sign Out',
                'sign Out Successfully',
                'success'
            );
        }
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser);
        })
        return () => unSubscribe()
    }, [])

    const authInfo = {
        user,
        loading,
        googleLogin,
        createUser,
        signIn,
        logOut
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;