import Navbar from '../components/Navbar'

const Dashboard = () => {
  return (
    <div>
      <Navbar />

      <div className='p-5'>
      <div className="bg-blue-500 text-white py-16 px-8 rounded-lg flex items-center justify-between relative">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold mb-4">Book Appointment With Trusted Doctors</h1>
          <p className="text-lg mb-6">
            Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
          </p>
          <a
            href="/book-appointment"
            className="inline-flex items-center bg-white text-blue-500 font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Book appointment
            <span className="ml-2">→</span>
          </a>
        </div>
        <div className="flex-shrink-0 absolute bottom-0 right-0 ">
          <img
            src="/doc-header-img.png" 
            alt="Doctors"
            className="w-full max-w-md rounded-xl"
          />
        </div>
      </div>
      </div>
    </div>
  ) 
}

export default Dashboard
