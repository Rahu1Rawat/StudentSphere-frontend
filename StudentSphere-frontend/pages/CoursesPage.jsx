import { CoursesPageUniCard } from "../pages components/CoursesPageUniCard";
import "../src/css/CoursesPage.css";
import coursesPageUniStd from "../src/images/Random_Pictures/coursesPageUniStd.png";
export const CoursesPage = () => {
  return (
    <div className="CoursesPage-parent">
      <div className="CoursesPage-uniStdImg-about">
        <div className="CoursesPage-uniStdImg">
          <img src={coursesPageUniStd} alt="Uni-std-illustration.png" />
        </div>
        <div className="CoursesPage-about">
          <span className="CoursesPage-about-AboutUsSpan">About Us</span>
          <span className="CoursesPage-about-span2">
            Welcome to the Education Center
          </span>
          <span className="CoursesPage-about-span3">
            Forging relationships between Universities and Students.
          </span>
          <span className="CoursesPage-about-span4">
            Explore variety education
          </span>
          <span className="CoursesPage-about-span4">Re-imagined</span>
          <span className="CoursesPage-about-span4">One place</span>
          <button className="CoursesPage-about-btn">More</button>
        </div>
      </div>
      <div className="CoursesPage-Popular-Unis-top">
        <div>
          <span className="CoursesPage-Popular-UniList">University List</span>
          <span className="CoursesPage-Popular-Universities">
            Popular Universities
          </span>
        </div>
        <div className="CoursesPage-Popular-Unis-topRight">
          <span> Forging relationships between Universities and Students.</span>
          <button>View All Universities</button>
        </div>
      </div>
      <div className="CoursesPageUniCard-parent-div">
        <CoursesPageUniCard />
        <CoursesPageUniCard />
        <CoursesPageUniCard />
        <CoursesPageUniCard />
        <CoursesPageUniCard />
        <CoursesPageUniCard />
        <CoursesPageUniCard />
        <CoursesPageUniCard />
        <CoursesPageUniCard />
        <CoursesPageUniCard />
        <CoursesPageUniCard />


      </div>
    </div>
  );
};
