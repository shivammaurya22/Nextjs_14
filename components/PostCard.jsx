import Link from 'next/link';

const PostCard = ({ post }) => {
  const shortAnswer = post.content.slice(0, 15);

  return (
    <div className="post-card">
      <h2>{post.question}</h2>
      <p>{shortAnswer}...</p>
      <div>
        {post.tags.map((tag, index) => (
          <span key={index}>#{tag} </span>
        ))}
      </div>
      <Link href={`/${post._id}`}>Read More</Link>
    </div>
  );
};

export default PostCard;
