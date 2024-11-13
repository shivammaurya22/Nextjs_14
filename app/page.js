import PostCard from '../components/PostCard';

async function fetchPosts() {
  const res = await fetch(`/api/posts`, { cache: 'no-store' });
  return res.json();
}

export default async function HomePage() {
  const posts = await fetchPosts();

  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
}
