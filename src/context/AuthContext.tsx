import { createContext, useState, useEffect, type ReactNode } from "react";

// ✅ Define types
type AuthContextType = {
    username: string;
    login: (user: string) => void;
    logout: () => void;
};

// ✅ Create context with default value
export const AuthContext = createContext<AuthContextType | null>(null);

// ✅ Props type
type AuthProviderProps = {
    children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [username, setUsername] = useState<string>("");

    useEffect(() => {
        const storedUser = localStorage.getItem("username");
        if (storedUser) setUsername(storedUser);
    }, []);

    const login = (user: string) => {
        localStorage.setItem("username", user);
        setUsername(user);
    };

    const logout = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("token");
        setUsername("");
    };

    return (
        <AuthContext.Provider value={{ username, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};