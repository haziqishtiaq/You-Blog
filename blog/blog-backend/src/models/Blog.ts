import { Schema, model } from 'mongoose';

interface IBlog {
  title: string;
  content: string;
}

const BlogSchema = new Schema<IBlog>({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

export default model<IBlog>('Blog', BlogSchema);