import { useParams, Link } from "react-router-dom";
import { ageGroups } from "../data/guides";

export default function GuideDetail() {
  const { id } = useParams();
  const guide = ageGroups.find((g) => g.id === id);

  if (!guide) {
    return (
      <div className="page not-found">
        <h1>Guide Not Found</h1>
        <p>
          We couldn't find that guide. <Link to="/guides">View all guides</Link>
        </p>
      </div>
    );
  }

  return (
    <div className="page guide-detail">
      <div
        className="guide-hero"
        style={{ backgroundColor: guide.color + "33" }}
      >
        <Link to="/guides" className="back-link">
          ← All Guides
        </Link>
        <span className="guide-detail-emoji">{guide.emoji}</span>
        <h1>{guide.title}</h1>
        <p className="guide-summary">{guide.summary}</p>
      </div>

      <div className="guide-content">
        <section className="guide-section">
          <h2>🎯 Developmental Milestones</h2>
          <div className="milestones-list">
            {guide.milestones.map((milestone, i) => (
              <div key={i} className="milestone-item">
                <span className="milestone-check">✓</span>
                <span>{milestone}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="guide-section">
          <h2>💡 Parenting Tips</h2>
          <div className="tips-accordion">
            {guide.tips.map((tip, i) => (
              <details key={i} className="tip-detail">
                <summary>{tip.title}</summary>
                <p>{tip.detail}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="guide-section">
          <h2>🌟 Guiding Points to Remember</h2>
          <div className="guiding-points">
            {guide.guidingPoints.map((point, i) => (
              <blockquote key={i} className="guiding-point">
                <p>{point}</p>
              </blockquote>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
