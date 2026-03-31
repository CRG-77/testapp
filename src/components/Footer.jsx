import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <span className="logo-icon">🌿</span>
          <span className="logo-text">ParentWise</span>
          <p>Empowering parents to raise happy, healthy children.</p>
        </div>
        <div className="footer-links">
          <h4>Explore</h4>
          <Link to="/guides">Age Guides</Link>
          <Link to="/tips">Parenting Tips</Link>
          <Link to="/milestones">Milestones</Link>
        </div>
        <div className="footer-links">
          <h4>Resources</h4>
          <Link to="/about">About Us</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} ParentWise. Built with love for
          families everywhere.
        </p>
      </div>
    </footer>
  );
}
