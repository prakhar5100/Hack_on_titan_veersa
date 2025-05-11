import React, { createContext, useState, useEffect, useContext } from 'react';

interface UserDetails {
    [key: string]: any; 
}

interface AuthContextType {
    isAuthenticated: boolean;
    userDetails: UserDetails | null;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

    useEffect(() => {
        const authToken = localStorage.getItem('authToken');
        const storedUserDetails = localStorage.getItem('userDetails');

        if (authToken) {
            setIsAuthenticated(true);
            if (storedUserDetails) {
                setUserDetails(JSON.parse(storedUserDetails));
            }
        } else {
            setIsAuthenticated(false);
            setUserDetails(null);
        }
    }, []);

    const logout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userDetails');
        setIsAuthenticated(false);
        setUserDetails(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, userDetails, logout }}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
