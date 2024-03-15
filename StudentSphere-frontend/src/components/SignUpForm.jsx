import lockIcon from "../images/icons/lock-icon.png";
import messageIcon from "../images/icons/message.png";
import usersIcon from "../images/icons/users-icon.png";
import closeIcon from "../images/icons/cancel.png";
import mark from "../images/icons/mark.png";
import OtpVerificationForm from "../components/OtpVerificationForm";
import { useState } from "react";
import "../css/SignUpForm.css"

function SignUpForm({
  activeForm,
  inputValue,
  setInputValue,
  setIsActiveForm,
  clearInputField,
}) {
  const [accessStatus, setAccessStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInput = async (inputValue) => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3000/check-domain", {
        method: "POST",
        body: JSON.stringify({
          domain: inputValue,
        }),
        headers: {
          "content-type": "application/json",
        },
      });
      const data = await response.json();
      setAccessStatus(data.status);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false); // set loading to false after fetch is completed
    }
  };

  const handleInputChange = async (e) => {
    setInputValue(e.target.value);
    if (e.target.value === "") {
      setAccessStatus("");
    } else if (
      e.target.value.includes("@") &&
      e.target.value.split("@")[1].includes(".")
    ) {
      await handleInput(e.target.value);
    }
  };

  const isCompleteEmail = (email) => {
    const parts = email.split("@");
    if (parts.length !== 2) {
      return false;
    }
    const domainParts = parts[1].split(".");
    return domainParts.length >= 2 && domainParts[1].length > 0;
  };

  const handleNextClick = async () => {
    setIsActiveForm("otpVerification");
    try {
      const response = await fetch("http://localhost:3000/send-otp", {
        method: "POST",
        body: JSON.stringify({ email: inputValue }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container">
      <div className="signUpForm-box">
        <h3>Why join Student Sphere?</h3>
        <img
          className="close-icon"
          src={closeIcon}
          alt="close-icon"
          onClick={() => {
            setIsActiveForm(false);
            clearInputField();
          }}
          width="30"
          height="30"
        />
        <div className="icon-container">
          <div className="icon-wrapper">
            <img src={lockIcon} alt="lock-icon" />
            <p>Get full access to posts and comments</p>
          </div>
          <div className="icon-wrapper">
            <img src={usersIcon} alt="users-icon" />
            <p>Connect anonymously with fellow students</p>
          </div>
          <div className="icon-wrapper">
            <img src={messageIcon} alt="message-icon" />
            <p>Direct message any community member</p>
          </div>
        </div>
        {activeForm === "otpVerification" ? (
          <OtpVerificationForm
            email={inputValue}
            setInput={setInputValue}
          />
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter university email"
              value={inputValue}
              onChange={handleInputChange}
            />
            {accessStatus === "Limited" && (
              <p className="limited-access">
                <img
                  src={mark}
                  alt="mark-icon"
                  style={{
                    width: "1em",
                    height: "1em",
                    verticalAlign: "text-bottom",
                    marginRight: "0.5em",
                  }}
                />
                This domain will give you limited access to content and
                features.
              </p>
            )}
            <button
              className="next-btn"
              disabled={!isCompleteEmail(inputValue) || isLoading}
              onClick={handleNextClick}
            >
              NEXT
            </button>
          </>
        )}
      </div>
    </div>
  );
}
export default SignUpForm;
