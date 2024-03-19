import { useState } from "react";
import logo from "../images/student_sphere_logo.png";
import SignUpForm from "./SignUpForm";
import OtpVerificationForm from "./OtpVerificationForm";
import LogInForm from "./LogInForm";
import threeDot from "../images/icons/three-dot.png";
import "../css/Header.css";

function Header() {
  const [activeForm, setIsActiveForm] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const clearInputField = () => {
    setInputValue("");
  };

  const openSignUpForm = () => {
    setIsActiveForm("signUp");
  };

  const openLoginForm = () => {
    setIsActiveForm("login");
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    console.log("User is logged in:", isLoggedIn);
  };
  console.log("handleLoginSuccess in Header:", handleLoginSuccess);

  return (
    <div className="header">
      <div className="img-searchBar">
        <img className="website-logo" src={logo} alt="Website-logo" />
        <input className="search-bar" type="text" placeholder="Search" />
      </div>
      <div className="right-section">
        {isLoggedIn ? (
          <div className="login-user-info">
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
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
            </div>
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
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </div>
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
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </div>
          </div>
        ) : (
          <div className="logIn-signUp">
            <button className="login-btn" onClick={openLoginForm}>
              LOG IN
            </button>
            <button className="signup-btn" onClick={openSignUpForm}>
              SIGN UP
            </button>
          </div>
        )}
        <div>
          {activeForm === "login" && (
            <LogInForm
              setIsActiveForm={setIsActiveForm}
              handleLoginSuccess={handleLoginSuccess}
            />
          )}
        </div>
        <div>
          {activeForm === "signUp" && (
            <SignUpForm
              setInputValue={setInputValue}
              activeForm={activeForm}
              inputValue={inputValue}
              setIsActiveForm={setIsActiveForm}
              clearInputField={clearInputField}
              handleLoginSuccess={handleLoginSuccess}
            />
          )}
          {activeForm === "otpVerification" && (
            <OtpVerificationForm
              setInputValue={setInputValue}
              email={inputValue}
              setIsActiveForm={setIsActiveForm}
              clearInputField={clearInputField}
            />
          )}
        </div>
        <div
          className="three-dot-button"
          onClick={() => alert("Three Dot Clicked")}
        >
          <img src={threeDot} alt="Three dot menu" />
        </div>
      </div>
    </div>
  );
}

export default Header;
