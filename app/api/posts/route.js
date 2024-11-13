import dbConnect from './dbConnect';
import Post from '../../../models/Post';

export async function GET() {
  await dbConnect();
  const posts = await Post.find({});
  return new Response(JSON.stringify(posts), { status: 200 });
}

export async function POST(request) {
  await dbConnect();
  const { question, content, tags } = await request.json();

  try {
    const newPost = await Post.create({ question, content, tags });
    return new Response(JSON.stringify(newPost), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error creating post' }), { status: 400 });
  }
}
