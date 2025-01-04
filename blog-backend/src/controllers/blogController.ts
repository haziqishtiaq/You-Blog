import { Request, Response } from 'express';
import Blog from '../models/Blog';

export const getBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const createBlog = async (req: Request, res: Response) => {
  const { title, content } = req.body;
  try {
    const newBlog = new Blog({ title, content });
    await newBlog.save();
    res.json(newBlog);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getNewestBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 }).limit(5);
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
