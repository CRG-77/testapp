import { Link } from "react-router-dom";
import { ageGroups } from "../data/guides";

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>
            Become the Parent <br />
            Your Child Needs
          </h1>
          <p>
            Evidence-based guidance, age-specific tips, and compassionate
            support for every stage of your parenting journey.
          </p>
          <div className="hero-buttons">
            <Link to="/guides" className="btn btn-primary">
              Explore Age Guides
            </Link>
            <Link to="/tips" className="btn btn-secondary">
              Parenting Tips
            </Link>
          </div>
        </div>
      </section>

      <section className="section features">
        <h2 className="section-title">How ParentWise Helps You</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📖</div>
            <h3>Age-Based Guides</h3>
            <p>
              Tailored advice for every developmental stage, from newborn
              through the teen years.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💡</div>
            <h3>Practical Tips</h3>
            <p>
              Actionable strategies you can use today for communication,
              discipline, and bonding.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Milestones Tracker</h3>
            <p>
              Understand what to expect at each age with our developmental
              milestone guide.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">❤️</div>
            <h3>Guiding Points</h3>
            <p>
              Gentle reminders and wisdom to keep you centered on what matters
              most.
            </p>
          </div>
        </div>
      </section>

      <section className="section age-preview">
        <h2 className="section-title">Guides for Every Age</h2>
        <div className="age-cards">
          {ageGroups.map((group) => (
            <Link
              to={`/guides/${group.id}`}
              key={group.id}
              className="age-card"
              style={{ borderColor: group.color }}
            >
              <div
                className="age-card-header"
                style={{ backgroundColor: group.color }}
              >
                <span className="age-emoji">{group.emoji}</span>
              </div>
              <h3>{group.title}</h3>
              <p>{group.summary}</p>
              <span className="card-link">Read Guide →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section cta">
        <div className="cta-content">
          <h2>Every Great Parent Was Once a Beginner</h2>
          <p>
            You don't need to be perfect — you just need to be present, willing
            to learn, and full of love. Start your journey today.
          </p>
          <Link to="/guides" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
