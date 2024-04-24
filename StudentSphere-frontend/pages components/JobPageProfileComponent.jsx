import "../pages component css/JobPageProfileComponent.css";
import crossIcon from "../src/images/icons/cross-icon.png";
import createProfileIcon from "../src/images/icons/person-search.png";
export const JobPageProfileComponent = () => {
  return (
    <div className="JobPageProfileComponent-parent">
      <div className="strong-cross">
        <div className="JobPage-Strong">
          <strong>Don't just apply to jobs; let the offers come to you.</strong>
        </div>
        <div className="JobPage-crossIcon">
          <img src={crossIcon} alt="close" />
        </div>
      </div>
      <div className="JobPage-createProfile-desc-btn-photo">
        <div className="JobPage-createProfile-desc-btn">
          <span>
            Blind's new talent network matches candidates like you with
            companies looking for their next big hire.
          </span>
          <button>Create a Profile</button>
        </div>
        <div className="JobPage-createProfile-photo">
          <img src={createProfileIcon} alt="create" />
        </div>
      </div>
    </div>
  );
};
