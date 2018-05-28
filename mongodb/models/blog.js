import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  tag: {
    type: [String],
  },
  likes: {
    type: Number,
  },
});

export default mongoose.model('Blog', blogSchema);
