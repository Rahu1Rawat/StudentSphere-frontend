import { useState } from "react";
import "../css/OtpVerificationForm.css";
import closeIcon from "../images/icons/cancel.png";
import CreateAccount from "./CreateAccount";

function OtpVerificationForm({
  email,
  setIsActiveForm,
  setInputValue,
  clearInputField,
}) {
  const [otp, setOtp] = useState("");
  const [verificationMessage, setVerificationMessage] = useState("");

  const handleOtpChange = async (e) => {
    const otpInput = e.target.value;
    setOtp(otpInput);
    if (otpInput.length === 6) {
      try {
        const response = await fetch("http://localhost:3000/verify-otp", {
          method: "POST",
          body: JSON.stringify({ email: email, otp: otpInput }),
          headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        setVerificationMessage(data.message);
      } catch (error) {
        console.error("Error:", error);
        setVerificationMessage("Invalid OTP");
      }
    }
  };

  return (
    <div className="overlay">
      {" "}
      <div className="parent-div">
        <div className="container-div">
          <img
            className="close-icon"
            src={closeIcon}
            alt="close-icon"
            onClick={() => {
              setIsActiveForm("");
              setInputValue("");
              clearInputField();
            }}
            width="20"
            height="20"
          />
          <h3>CHECK YOUR EMAIL</h3>
          <p>
            Enter the verification code we sent to your email{" "}
            <strong>{email}</strong> the code will expire shortly, so enter it
            soon.
          </p>
          <a href="">CHANGE EMAIL {">"}</a>
          <input
            type="text"
            placeholder="Enter verification code"
            onChange={handleOtpChange}
          />
          {verificationMessage === "OTP verified" ? (
            <>
              <CreateAccount />
              <p style={{ marginBottom: "1em" }}>{verificationMessage}</p>
            </>
          ) : (
            <p style={{ marginBottom: "1em", color: "red" }}>Invalid OTP</p>
          )}
          <p className="resend-code">
            Didn't get an email? Check your spam folder, or{" "}
            <a href="">Resend Code</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default OtpVerificationForm;
