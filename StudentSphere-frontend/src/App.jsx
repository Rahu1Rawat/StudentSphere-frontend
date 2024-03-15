import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import TopNavigation from "./components/TopNavigation";
import { HomeSideBar } from "./components/HomeSideBar";
import { PostCard } from "./components/PostCard";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <TopNavigation />
      </div>
      <div className="HomeSideBar-PostCard">
        <HomeSideBar />
        <div className="PostCard-container">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
