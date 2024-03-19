import { useState, useEffect } from "react";
import adjectives from "../assets/english-adjectives.json";
import animals from "../assets/animals.json";
import "../css/CreateAccount.css";
import Spinner from "react-bootstrap/esm/Spinner";

function CreateAccount({
  email,
  setIsActiveForm,
  clearInputField,
  handleLoginSuccess,
}) {
  console.log("handleLoginSuccess in SignUpForm:", handleLoginSuccess);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const [isSignUpLoading, setIsSingUpLoading] = useState(false);

  useEffect(() => {
    const randomAdjectiveIndex = Math.floor(Math.random() * adjectives.length);
    const randomAnimalIndex = Math.floor(Math.random() * animals.length);

    const generatedUsername =
      adjectives[randomAdjectiveIndex].adjective +
      animals[randomAnimalIndex].animal;

    setUsername(generatedUsername);
  }, []);

  useEffect(() => {
    setButtonDisabled(
      password !== confirmPassword || password === "" || confirmPassword === ""
    );
  }, [password, confirmPassword]);

  async function handleCreateAccount() {
    setIsSingUpLoading(true);
    try {
      // Artificial delay for testing
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const response = await fetch("http://localhost:3000/create-account", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          username: username,
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data.message);
      setIsActiveForm(null);
      handleLoginSuccess();
    } catch (error) {
      console.error("Error", error);
    } finally {
      setIsSingUpLoading(false);
    }
  }

  return (
    <div className="CreateAccount-overlay">
      <div className="CreateAccount-parent-div">
        <div className="CYA-closeBtn">
          <h3>CREATE YOUR ACCOUNT</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            width={24}
            height={24}
            onClick={() => {
              setIsActiveForm("");
              clearInputField();
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="password-jssBtn">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Confirm password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <input type="text" value={username} />
          <button onClick={handleCreateAccount} disabled={isButtonDisabled}>
            {isSignUpLoading ? (
              <Spinner animation="border" />
            ) : (
              "JOIN STUDENT SPHERE"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
