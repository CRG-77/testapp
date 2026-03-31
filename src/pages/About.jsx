import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="page about-page">
      <div className="page-header">
        <h1>About ParentWise</h1>
        <p>
          We believe every parent deserves access to reliable, compassionate
          guidance for raising happy, healthy children.
        </p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            ParentWise was created with a simple belief: great parenting isn't
            about being perfect — it's about being present, informed, and
            willing to grow alongside your children.
          </p>
          <p>
            We provide evidence-based guidance, practical tips, and
            developmental insights to help parents navigate every stage of their
            child's growth with confidence and compassion.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Approach</h2>
          <div className="approach-cards">
            <div className="approach-card">
              <h3>🔬 Evidence-Based</h3>
              <p>
                Our content is informed by child development research,
                developmental psychology, and pediatric best practices.
              </p>
            </div>
            <div className="approach-card">
              <h3>💛 Compassionate</h3>
              <p>
                We meet parents where they are — without judgment. Parenting is
                hard, and you're doing better than you think.
              </p>
            </div>
            <div className="approach-card">
              <h3>🌍 Inclusive</h3>
              <p>
                Every family is unique. Our guidance is adaptable to different
                family structures, cultures, and circumstances.
              </p>
            </div>
            <div className="approach-card">
              <h3>🎯 Practical</h3>
              <p>
                No vague platitudes — we provide actionable strategies you can
                use starting today.
              </p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Core Principles</h2>
          <ol className="principles-list">
            <li>
              <strong>Connection before correction</strong> — Relationship is
              the foundation of effective parenting.
            </li>
            <li>
              <strong>Progress over perfection</strong> — Small, consistent
              improvements matter more than getting it all right.
            </li>
            <li>
              <strong>Every child is unique</strong> — What works for one child
              may not work for another, and that's okay.
            </li>
            <li>
              <strong>Parents need support too</strong> — You can't pour from an
              empty cup. Self-care is part of good parenting.
            </li>
            <li>
              <strong>It's never too late</strong> — No matter where you are in
              your parenting journey, positive change is always possible.
            </li>
          </ol>
        </section>

        <div className="about-cta">
          <h2>Start Your Journey</h2>
          <p>
            Explore our age-based guides and discover practical strategies for
            every stage of your child's development.
          </p>
          <Link to="/guides" className="btn btn-primary">
            Explore Guides
          </Link>
        </div>
      </div>
    </div>
  );
}
