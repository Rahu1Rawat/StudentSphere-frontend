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

  const clearInputField = () => {
    setInputValue("");
  };

  const openSignUpForm = () => {
    setIsActiveForm("signUp");
  };

  const openLoginForm = () => {
    setIsActiveForm("login");
  };
  return (
    <div className="header">
      <div className="img-searchBar">
        <img className="website-logo" src={logo} alt="Website-logo" />
        <input className="search-bar" type="text" placeholder="Search" />
      </div>
      <div className="right-section">
        <div className="logIn-signUp">
          <button className="login-btn" onClick={openLoginForm}>
            LOG IN
          </button>
          <button className="signup-btn" onClick={openSignUpForm}>
            SIGN UP
          </button>
        </div>
        <div>
          {activeForm === "login" && (
            <LogInForm setIsActiveForm={setIsActiveForm} />
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
