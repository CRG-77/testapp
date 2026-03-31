import { milestones } from "../data/guides";

export default function Milestones() {
  return (
    <div className="page milestones-page">
      <div className="page-header">
        <h1>Developmental Milestones</h1>
        <p>
          Understanding what to expect at each age helps you support your
          child's growth. Remember: every child develops at their own pace.
          These are general guidelines, not rigid rules.
        </p>
      </div>

      <div className="milestones-timeline">
        {milestones.map((stage, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker">
              <span className="timeline-age">{stage.age}</span>
            </div>
            <div className="timeline-content">
              <div className="milestone-categories">
                <div className="milestone-cat">
                  <h4>🏃 Physical</h4>
                  <ul>
                    {stage.physical.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="milestone-cat">
                  <h4>🧠 Cognitive</h4>
                  <ul>
                    {stage.cognitive.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="milestone-cat">
                  <h4>👥 Social</h4>
                  <ul>
                    {stage.social.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="milestone-note">
        <h3>📌 Important Note</h3>
        <p>
          Developmental milestones are general guidelines. Children develop at
          their own unique pace. If you have concerns about your child's
          development, consult with your pediatrician. Early intervention, when
          needed, can make a significant difference.
        </p>
      </div>
    </div>
  );
}
