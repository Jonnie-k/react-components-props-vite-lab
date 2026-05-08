import React from "react";
import blog from "./blog";

import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";

function App() {
  return (
    <div className="App">
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