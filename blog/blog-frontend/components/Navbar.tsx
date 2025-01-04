"use client";

import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state: { auth: { isAuthenticated: boolean } }) => state.auth.isAuthenticated);
  const user = useSelector((state: { auth: { user: any } }) => state.auth.user); // Assuming user info is stored in auth state
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-500 to-blue-500 p-4 shadow-lg border-b border-gray-300">
      <div className="container mx-auto flex justify-between items-center">
        {pathname !== '/' && (
          <Link href="/" className="text-white text-2xl font-bold hover:text-gray-300 transition duration-300 border-b border-gray-300 pb-2">
            My Blog
          </Link>
        )}
        <div className="flex space-x-4 items-center">
          {!isAuthenticated ? (
            <>
              {pathname !== '/auth/login' && pathname !== '/auth/register' && (
                <>
                  <Link href="/auth/login">
                    <button className="text-white hover:text-gray-300 transition duration-300 border border-gray-300 px-4 py-2 rounded">
                      Login
                    </button>
                  </Link>
                  <Link href="/auth/register">
                    <button className="text-white hover:text-gray-300 transition duration-300 border border-gray-300 px-4 py-2 rounded">
                      Register
                    </button>
                  </Link>
                </>
              )}
            </>
          ) : (
            <div className="relative">
              <button onClick={toggleDropdown} className="flex items-center space-x-2 text-white hover:text-gray-300 transition duration-300 border border-gray-300 px-4 py-2 rounded">
                {user?.image ? (
                  <img src={user.image} alt="Profile" className="w-8 h-8 rounded-full border border-gray-300" />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center text-white border border-gray-300">
                    {user?.name ? user.name[0].toUpperCase() : 'U'}
                  </div>
                )}
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 border border-gray-300">
                  <Link href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b border-gray-200">
                    Profile
                  </Link>
                  <Link href="/my-blogs" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b border-gray-200">
                    My Blogs
                  </Link>
                  <Link href="/settings" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b border-gray-200">
                    Settings
                  </Link>
                  <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;