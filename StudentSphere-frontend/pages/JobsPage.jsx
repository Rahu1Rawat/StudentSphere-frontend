import { JobListComponent } from "../pages components/JobListComponent";
import { JobPageProfileComponent } from "../pages components/JobPageProfileComponent";
import girlSearching from "../src/images/Random_Pictures/girl-searching.png";
import "../src/css/JobsPage.css";
export const JobsPage = () => {
  return (
    <div className="jobs-page-parent">
      <div className="JobsPage-searchBar">
        <input type="text" placeholder="Search by job title or company" />
      </div>
      <div className="JobPage-jobFilters">
        <button>Date Posted</button>
        <button>Location</button>
        <button>Remote Only</button>
        <button>Required Experience</button>
        <button>Salary</button>
        <button>Company</button>
        <button>Technologies</button>
        <button>Clear all</button>
      </div>
      <div className="JobPage-bottom">
        <div className="JobPage-bottomLeft">
          <div className="jobs-savedJobs-buttons">
            <button>Jobs</button>
            <button>Saved Jobs</button>
          </div>
          <div className="bottomLeft-profile-jobList-nav">
            <div className="JobPage-profileDiv">
              <JobPageProfileComponent />
            </div>
            <div className="JobPage-jobListDiv">
              <div className="JobPage-jobListDiv-container">
                <JobListComponent />
                <JobListComponent />
              </div>
            </div>
            <div className="JobPage-Navigation">
              <div className="JobPage-Navigation-Previous">
                <a href="/campus-jobs?page=-1">B</a>
              </div>
              <div className="JobPage-Navigation-Numbers">
                <a href="/campus-jobs?page=1">1</a>
                <a href="/campus-jobs?page=1">2</a>
                <a href="/campus-jobs?page=1">3</a>
                <a href="/campus-jobs?page=1">4</a>
                <a href="/campus-jobs?page=1">5</a>
                <a href="/campus-jobs?page=?">...</a>
                <a href="/campus-jobs?page=1">200</a>
              </div>
              <div className="JobPage-Navigation-Former">
                <a href="/campus-jobs?page=+1">F</a>
              </div>
            </div>
          </div>
        </div>
        <div className="JobPage-bottomRight">
          <div className="JobPage-bottomRight-content">
            <img src={girlSearching} alt="searching" />
          </div>
          <div className="JobPage-bottomRight-content-desc">
            <h2>Your Gateway to Professional Growth</h2>
            <strong>Select a job to get started</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
