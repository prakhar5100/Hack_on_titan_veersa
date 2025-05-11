

function Login() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200 px-4 overflow-hidden">
      
      {/* ✅ Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.pixabay.com/photo/2018/08/02/07/50/medical-procedures-3579029_1280.jpg" // 👈 yahan tumhari image ka path (public folder me ho)
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* ✅ Actual Login Box */}
      <div className="relative z-10 bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-blue-900 mb-6">Login to Medixx</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Don't have an account?{' '}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
