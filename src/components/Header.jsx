function Header() {
  return (
    <header className="bg-blue-900 text-white py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Medixx</h1>
        <nav className="space-x-6">
          <a href="/" className="hover:text-yellow-400">Home</a>
          <a href="/features" className="hover:text-yellow-400">Features</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
