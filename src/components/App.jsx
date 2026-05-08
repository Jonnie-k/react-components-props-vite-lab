import blog from "../blog";

import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  return (
    <div>
      <Header name={blog.name} />

      <About
        about={blog.about}
        image={blog.image}
      />

      <ArticleList posts={blog.posts} />
    </div>
  );
}

export default App;