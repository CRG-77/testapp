import { Link } from "react-router-dom";
import { ageGroups } from "../data/guides";

export default function Guides() {
  return (
    <div className="page guides-page">
      <div className="page-header">
        <h1>Age-Based Parenting Guides</h1>
        <p>
          Every stage of childhood brings new joys and challenges. Choose your
          child's age group to discover tailored advice, developmental
          milestones, and guiding points.
        </p>
      </div>
      <div className="guides-grid">
        {ageGroups.map((group) => (
          <Link
            to={`/guides/${group.id}`}
            key={group.id}
            className="guide-card"
          >
            <div
              className="guide-card-accent"
              style={{ backgroundColor: group.color }}
            />
            <div className="guide-card-body">
              <span className="guide-emoji">{group.emoji}</span>
              <h2>{group.title}</h2>
              <p>{group.summary}</p>
              <div className="guide-preview">
                <h4>Key Topics:</h4>
                <ul>
                  {group.tips.slice(0, 3).map((tip, i) => (
                    <li key={i}>{tip.title}</li>
                  ))}
                </ul>
              </div>
              <span className="card-link">Explore Guide →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
