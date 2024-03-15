import "../css/CreateAccount.css";
import closeIcon from "../images/icons/cancel.png";

function CreateAccount() {
  return (
    <div className="CreateAccount-overlay">
      <div className="CreateAccount-parent-div">
        <div className="CreateAccount-container-div">
          <img src={closeIcon} alt="close-btn" width="20" height="20"  />
          <h3>CREATE YOUR ACCOUNT</h3>
          <input type="text" placeholder="Password" />
          <input type="text" placeholder="Confirm password" />
          <input type="text" placeholder="Username" />
          <button>JOIN STUDENT SPHERE</button>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
