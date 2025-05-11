import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-blue-50">
      
      <aside className="w-64 bg-white shadow-md hidden md:block">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-8">MediXX</h2>
          <nav className="space-y-4">
            <Link to="/dashboard" className="block text-blue-700 hover:text-blue-900 font-medium">Dashboard</Link>
            <Link to="/appointments" className="block text-blue-700 hover:text-blue-900 font-medium">Appointments</Link>
            <Link to="/profile" className="block text-blue-700 hover:text-blue-900 font-medium">Profile</Link>
            <Link to="/login" className="block text-red-600 hover:text-red-800 font-medium">Logout</Link>
          </nav>
        </div>
      </aside>

     
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">Welcome to MediXX Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-2 text-blue-800">Your Profile</h2>
            <p>Name: Harshit Mishra</p>
            <p>Email: harshit@example.com</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-2 text-blue-800">Appointments</h2>
            <p>No upcoming appointments</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-2 text-blue-800">Stats</h2>
            <p>Consultations done: 2</p>
            <p>Doctors consulted: 1</p>
          </div>
        </div>

        <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
          Book New Consultation
        </button>
      </main>
    </div>
  );
}

export default Dashboard;
