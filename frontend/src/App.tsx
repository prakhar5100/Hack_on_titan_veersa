import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./section/Login";
import Register from "./section/Register";
import Dashboard from "./section/Dashboard";
import { AuthProvider } from "./context/AuthContext";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const isAuthenticated = true; 
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
    </AuthProvider>
  );
};

export default App;