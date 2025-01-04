"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

// the Blog type
interface Blog {
  _id: string;
  title: string;
  content: string;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const token = useSelector((state: any) => state.auth.token);
  const router = useRouter();

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await axios.get("http://localhost:5000/api/blogs");
      setBlogs(response.data);
    };

    fetchBlogs();
  }, []);

  const handleCreateBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/api/blogs",
        { title, content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTitle("");
      setContent("");
      router.refresh(); // Reload the page to get the new blog
    } catch (error: any) {
      setError("Failed to create blog: " + error.response.data.message);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Blogs</h1>
      {token && (
        <form onSubmit={handleCreateBlog} className="mb-6 border p-4 rounded">
          <h2 className="text-2xl font-bold mb-4">Create a New Blog</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-300">
            Create Blog
          </button>
        </form>
      )}
      <div className="mt-4">
        {blogs.map((blog) => (
          <div key={blog._id} className="border-b py-4">
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;