import React from "react";
import blogData from "../data/blog"; // Adjusted path to standard data location

import Header from "./Header";
import About from "./About";
import ArticleList from "../components/ArticleList"; // Explicit path fix for components

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />

      <About
        about={blogData.about}
        image={blogData.image}
      />

      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;