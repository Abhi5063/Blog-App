import logo from "./logo.svg"; // You might not need this if not using the logo SVG
import "./App.css";

function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">
          MyBlog
        </a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>{" "}
          {/* Corrected typo: "Regester" to "Register" */}
        </nav>
      </header>

      {/* Blog Posts go here, OUTSIDE of the header */}

      <div className="Post">
        <div className="image">
          <img
            src="https://techcrunch.com/wp-content/uploads/2022/12/lawnmower-Large.jpeg?resize=1200,735"
            alt="Post Image"
          />
        </div>
        <div className="post">
          {" "}
          {/* Changed class name from "post" to "text" for better semantic meaning related to content, or ensure your CSS targets ".post" directly for the text content */}
          <h2>Full-house battery backup coming later this year</h2>
          <p className="info">
            <a className="author">Dewid Paszko</a>
            <time>2025-07-10 16:30</time>
          </p>
          <p className="summary">
            Today at its special launch event, home backup power giant EcoFlow
            launched a flurry of new products, including a “Whole-Home Backup
            Power Solution.”
          </p>
        </div>
      </div>

      <div className="Post">
        <div className="image">
          <img
            src="https://techcrunch.com/wp-content/uploads/2022/12/lawnmower-Large.jpeg?resize=1200,735"
            alt="Post Image"
          />
        </div>
        <div className="post">
          <h2>Full-house battery backup coming later this year</h2>
          <p className="info">
            <a className="author">Dewid Paszko</a>
            <time>2025-07-10 16:30</time>
          </p>
          <p className="summary">
            Today at its special launch event, home backup power giant EcoFlow
            launched a flurry of new products, including a “Whole-Home Backup
            Power Solution.”
          </p>
        </div>
      </div>

      <div className="Post">
        <div className="image">
          <img
            src="https://techcrunch.com/wp-content/uploads/2022/12/lawnmower-Large.jpeg?resize=1200,735"
            alt="Post Image"
          />
        </div>
        <div className="post">
          <h2>Full-house battery backup coming later this year</h2>
          <p className="info">
            <a className="author">Dewid Paszko</a>
            <time>2025-07-10 16:30</time>
          </p>
          <p className="summary">
            Today at its special launch event, home backup power giant EcoFlow
            launched a flurry of new products, including a “Whole-Home Backup
            Power Solution.”
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
