import "../css/LogInForm.css";
const LogInForm = ({ setIsActiveForm }) => {
  return (
    <div className="LogInForm-overlay">
      <div className="LogInForm-container">
        <div className="LogIn-closeParent">
          <div className="LogInForm-p">
            <p>LOG IN</p>
          </div>
          <div className="Cross-svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              onClick={() => {
                setIsActiveForm(null);
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <div className="LogInForm-details">
          <input type="text" placeholder="Enter your student email" />
          <input type="text" placeholder="Password" />
          <button className="LogIn-loginButton">LOG IN</button>
          <div className="LogInOR-container">
            <p>OR</p>
          </div>
          <button className="LogIn-codeButton">
            LOG IN WITH SECURITY CODE
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogInForm;
