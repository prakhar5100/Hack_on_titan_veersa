import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 

const Navbar: React.FC = () => {
    const { userDetails, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const handleProfileClick = () => {
        navigate('/profile');
    };

    return (
        <nav className="bg-white shadow-md px-4 py-3 flex items-center justify-between">
            <div className="flex items-center">
                <img src="/path-to-helio-logo.png" alt="Helio Logo" className="h-8" />
            </div>

            <div className="flex space-x-4">
                <Link to="/dashboard" className="text-gray-700 hover:text-blue-500">Home</Link>
                <Link to="/all-doctors" className="text-gray-700 hover:text-blue-500">All Doctors</Link>
                <Link to="/about" className="text-gray-700 hover:text-blue-500">About</Link>
                <Link to="/contact" className="text-gray-700 hover:text-blue-500">Contacts</Link>
            </div>

            <div className="flex items-center">
                {isAuthenticated && userDetails ? (
                    <div
                        className="cursor-pointer flex items-center"
                        onClick={handleProfileClick}
                    >
                        <img
                            src={userDetails.profilePicture || '/profile.png'}
                            alt="Profile"
                            className="h-8 w-8 rounded-full border border-gray-300"
                        />
                    </div>
                ) : (
                    <div className="flex space-x-4">
                        <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
                        <Link to="/register" className="text-blue-500 hover:underline">Register</Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;