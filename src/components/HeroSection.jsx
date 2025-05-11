
function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 bg-gradient-to-r from-blue-50 to-blue-100 py-10">
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
          Instant Access to Trusted <br /> Healthcare from Anywhere
        </h1>
        <p className="text-gray-700 text-lg">
          Connect with certified doctors in minutes. Secure. Affordable. Reliable.
        </p>
        <div className="space-x-4">
          <a
            href="/signup"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            Get Started
          </a>
          <a
            href="/features"
            className="text-blue-600 font-semibold text-lg hover:underline"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Hero Video */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <video
          className="w-full rounded-lg shadow-lg"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="newvdo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default HeroSection;
