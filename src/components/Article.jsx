function Article({ post }) {
  return (
    <div>
      <h2>{post.title}</h2>
      <small>{post.date}</small>
      <p>{post.preview}</p>
    </div>
  );
}

export default Article;