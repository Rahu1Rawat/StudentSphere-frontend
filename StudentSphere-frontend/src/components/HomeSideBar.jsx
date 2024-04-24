import "../css/HomeSideBar.css";

export const HomeSideBar = ({
  handleShowWritePostCard,
  handleShowReusableOverlay,
}) => {
  return (
    <div className="sidebar-home">
      <div className="post-btn">
        <button onClick={handleShowWritePostCard}> WRITE A POST</button>
      </div>
      <div className="h4-following">
        <h3>Following</h3>
      </div>
      <div className="industries">
        <p>
          <a href="#">Industries</a>
        </p>{" "}
        <div className="industries-li">
          <ul>
            <li>
              <a href="#">Tech</a>
            </li>
            <li>
              <a href="#">Startups</a>
            </li>
            <li>
              <a href="#">MNCs</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="job-groups">
        <p>
          <a href="#">Job Groups</a>
        </p>
        <div className="jobGroups-li">
          <ul>
            <li>
              <a href="#">Software Engineering</a>
            </li>
            <li>
              <a href="#">Cloud Engineering</a>
            </li>
            <li>
              <a href="#">DevOps</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="general-topics">
        <p>
          <a href="#">General Topics</a>
        </p>{" "}
        <div className="generalTopics-li">
          <ul>
            <li>
              <a href="#">Layoffs</a>
            </li>
            <li>
              <a href="#">Health & Wellness</a>
            </li>
            <li>
              <a href="#">Campus Life</a>
            </li>
            <li>
              <a href="#">Campus Culture</a>
            </li>
            <li>
              <a href="#">General Topic 1</a>
            </li>
            <li>
              <a href="#">General Topic 2</a>
            </li>
            <li>
              <a href="#">General Topic 3</a>
            </li>
            <li>
              <a href="#">General Topic 4</a>
            </li>
            <li>
              <a href="#">General Topic 5</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
