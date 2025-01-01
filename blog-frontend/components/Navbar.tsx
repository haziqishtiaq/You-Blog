import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold hover:text-gray-300 transition duration-300">
          My Blog
        </Link>
        <div className="flex space-x-4">
          <Link href="/auth/login" className="text-white hover:text-gray-300 transition duration-300">
            Login
          </Link>
          <Link href="/auth/register" className="text-white hover:text-gray-300 transition duration-300">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;