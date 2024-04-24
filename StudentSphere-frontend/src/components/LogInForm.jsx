import { useEffect, useState } from "react";
import "../css/LogInForm.css";
import Spinner from "react-bootstrap/Spinner";

const LogInForm = ({ setIsActiveForm, handleLoginSuccess }) => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoginLoading, setLoginLoading] = useState(false);

  useEffect(() => {
    if (loginPassword) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [loginPassword]);

  const handleLogin = async () => {
    setLoginLoading(true);
    try {
      // Artificial delay for testing
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        body: JSON.stringify({
          email: loginEmail,
          password: loginPassword,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }
      // Store the token securely (e.g., in local storage)
      localStorage.setItem("token", data.token);

      console.log(data.message);
      setIsActiveForm(null);
      handleLoginSuccess();
    } catch (error) {
      console.error("Error", error);
      setErrorMessage(error.message);
    } finally {
      setLoginLoading(false);
    }
  };

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
          <input
            type="text"
            placeholder="Enter your student email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          {errorMessage && (
            <div className="loginError-message"> {errorMessage}</div>
          )}
          <button
            className="LogIn-loginButton"
            onClick={handleLogin}
            disabled={isButtonDisabled || isLoginLoading} // Disable while loading
          >
            {isLoginLoading ? (
              <Spinner animation="border" size="sm" /> // Show spinner when loading
            ) : (
              "LOG IN"
            )}
          </button>
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
