import "../pages component css/CoursesPageUniCard.css";
import upesLogo from "../src/images/Random_Pictures/upes_logo.jpg";
export const CoursesPageUniCard = () => {
  return (
    <div>
      <div className="CoursesPageUniCard-div">
        <div>
          <img src={upesLogo} alt="upes" />
        </div>
        <div className="CoursesPageUniCard-div-span1">
          <span>University of Petroleum & Energy Studies</span>
        </div>
        <div className="CoursesPageUniCard-div-span2">
          <span>72+ courses</span>
        </div>
      </div>
    </div>
  );
};
