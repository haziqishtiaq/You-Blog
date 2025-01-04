"use client";

import { Provider } from 'react-redux';
import store, { initializeStore } from '../redux/store';
import Navbar from '../components/Navbar';
import { useEffect } from 'react';
import '../styles/globals.css'; // Import your global styles

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initializeStore();
  }, []);

  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 border border-gray-300">
        <Provider store={store}>
          <Navbar />
          <main className="border border-gray-300 p-4">{children}</main>
        </Provider>
      </body>
    </html>
  );
}