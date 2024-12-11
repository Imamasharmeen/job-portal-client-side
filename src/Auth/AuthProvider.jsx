import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
export const AuthContext = createContext(null)

const AuthProvider = () => {
    const [user, setUser] = useState(null)
    const[loading, setLoading]= useState(true)

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        createUser,
    }
    return (
        <div>
            
        </div>
    );
};

export default AuthProvider;