export default function Post() {
  return (
    <div className="Post">
      <div className="image">
        <img
          src="https://techcrunch.com/wp-content/uploads/2022/12/lawnmower-Large.jpeg?resize=1200,735"
          alt="Post Image"
        />
      </div>
      <div className="post">
        {" "}
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
  );
}
