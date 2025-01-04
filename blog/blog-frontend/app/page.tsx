"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

// Define the Blog type
interface Blog {
  _id: string;
  title: string;
  content: string;
}

const HomePage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/blogs/newest");
        setBlogs(response.data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    };

    fetchBlogs();
  }, []); // No dependencies needed here

  return (
    <div className="container mx-auto p-6 bg-gradient-to-r from-blue-100 to-purple-100 min-h-screen">
      <h1 className="text-5xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600 border-b border-gray-300 pb-4">
        Welcome to the Blog
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog._id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-300 m-4">
            <h2 className="text-2xl font-bold mb-2 text-gray-800 border-b border-gray-300 pb-2">{blog.title}</h2>
            <p className="text-gray-600">{blog.content}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link href="/blogs" legacyBehavior>
          <a className="inline-block bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300 text-xl border border-gray-300">
            Go to Blogs
          </a>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;