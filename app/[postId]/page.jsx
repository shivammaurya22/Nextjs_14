async function fetchPost(postId) {
    const res = await fetch(`/api/posts/${postId}`, { cache: 'no-store' });
    return res.json();
  }
  
  export default async function PostPage({ params }) {
    const post = await fetchPost(params.postId);
    const formattedDate = new Date(post.createdAt).toLocaleString();
  
    return (
      <div>
        <h1>{post.question}</h1>
        <p>Posted on: {formattedDate}</p>
        <p>{post.content}</p>
        <div>
          {post.tags.map((tag, index) => (
            <span key={index}>#{tag} </span>
          ))}
        </div>
      </div>
    );
  }
  