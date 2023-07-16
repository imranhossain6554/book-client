const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-center space-x-4">
        <a
          href="/home"
          className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          Home
        </a>
        <a
          href="/Add Books"
          className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          Team
        </a>
        <a
          href="/login"
          className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          login
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
