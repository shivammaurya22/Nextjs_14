import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  question: { type: String, required: true },
  content: { type: String, required: true },
  tags: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Post || mongoose.model('Post', PostSchema);
