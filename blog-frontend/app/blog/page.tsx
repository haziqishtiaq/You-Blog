"use client";

import { useEffect, useState } from "react";
import axios from "axios";

// Define the Blog type
interface Blog {
  _id: string;
  title: string;
  content: string;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await axios.get("http://localhost:5000/api/blogs");
      setBlogs(response.data);
    };

    fetchBlogs();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Blogs</h1>
      <div className="mt-4">
        {blogs.map((blog) => (
          <div key={blog._id} className="border-b py-4">
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p className="text-gray-700">{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;

