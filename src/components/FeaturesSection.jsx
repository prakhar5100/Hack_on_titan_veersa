
import React from 'react';

function FeaturesSection() {
  return (
    <section
      className="py-24 bg-cover bg-center relative"
      style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2017/07/23/10/44/dentist-2530990_1280.jpg')" }} // Put your bg img in /public/images
    >
     
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-14 animate-fade-in">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-6 bg-white bg-opacity-90 shadow-xl rounded-xl hover:scale-105 transition-transform duration-300 animate-fade-in-up delay-100">
            <h3 className="text-xl font-bold text-blue-800 mb-3">Instant Consultations</h3>
            <p className="text-gray-700">
              Get connected to certified doctors instantly with our telehealth solution.
            </p>
          </div>

          <div className="p-6 bg-white bg-opacity-90 shadow-xl rounded-xl hover:scale-105 transition-transform duration-300 animate-fade-in-up delay-200">
            <h3 className="text-xl font-bold text-blue-800 mb-3">Secure and Private</h3>
            <p className="text-gray-700">
              Your data is protected with encryption to ensure your privacy during the consultation.
            </p>
          </div>

          <div className="p-6 bg-white bg-opacity-90 shadow-xl rounded-xl hover:scale-105 transition-transform duration-300 animate-fade-in-up delay-300">
            <h3 className="text-xl font-bold text-blue-800 mb-3">Affordable Healthcare</h3>
            <p className="text-gray-700">
              Access healthcare at a fraction of the cost compared to in-person consultations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
