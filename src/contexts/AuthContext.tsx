import { createContext, ReactNode, useEffect, useState } from "react";
import { IAuthContext } from "../types/AuthContextType";

export const AuthContext = createContext<IAuthContext>({
    user: null,
    setUser: () => null
});

const AuthContextProvider = ({ children }: { children: ReactNode }) => {

    const [user, setUser] = useState<object | null>(
        localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : null
    );

    useEffect(() => {
        if (user) localStorage.setItem('user', JSON.stringify(user))
    },[user]);


    return <AuthContext.Provider value={{ user, setUser }}>
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider
