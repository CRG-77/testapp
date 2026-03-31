import { parentingTips } from "../data/guides";

export default function Tips() {
  const categories = [...new Set(parentingTips.map((t) => t.category))];

  return (
    <div className="page tips-page">
      <div className="page-header">
        <h1>Parenting Tips & Strategies</h1>
        <p>
          Practical, evidence-based strategies to strengthen your relationship
          with your child and handle everyday challenges with confidence.
        </p>
      </div>

      <div className="tips-categories">
        {categories.map((category) => (
          <span key={category} className="category-badge">
            {category}
          </span>
        ))}
      </div>

      <div className="tips-grid">
        {parentingTips.map((tip) => (
          <div key={tip.id} className="tip-card">
            <div className="tip-card-icon">{tip.icon}</div>
            <span className="tip-category">{tip.category}</span>
            <h3>{tip.title}</h3>
            <p>{tip.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
