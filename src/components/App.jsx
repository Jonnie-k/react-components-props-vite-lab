import blog from "../blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  return (
    <div className="App">
      <header>
        <Header name={blog.name} />
      </header>

      <aside>
        <About
          about={blog.about}
          image={blog.image}
        />
      </aside>

      <main>
        <ArticleList posts={blog.posts} />
      </main>
    </div>
  );
}

export default App;