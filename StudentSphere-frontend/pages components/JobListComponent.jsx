import "../pages component css/JobListComponent.css";
import googleLogo from "../src/images/Random_Pictures/googlelogo.jpg";
export const JobListComponent = () => {
  return (
    <div className="JobListComponent-parent">
      <div className="JobListComponent-img-title-mark">
        <div className="JobListComponent-compImg-title-comp-rate">
          <div className="JobListComponent-compImg">
            <img src={googleLogo} alt="Company Logo" />
          </div>
          <div className="JobListComponent-title-comp-rate">
            <div className="JobListComponent-title">
              <span>SWE</span>
            </div>
            <div className="JobListComponent-comp-rate">
              <span>Google</span>
              <span>.</span>
              <span>Bangalore</span>
            </div>
          </div>
        </div>
        <div className="JobListComponent-bookmark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
            />
          </svg>
        </div>
      </div>
      <div className="JobListComponent-svgAndLocation">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
        </div>
        <div>
          <span>Dehradun, India</span>
        </div>
      </div>
    </div>
  );
};
