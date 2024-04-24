import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { HomeSideBar } from "./components/HomeSideBar";
import { PostCard2 } from "./components/PostCard2";
import { WritePostCard } from "./components/WritePostCard";
import { ReusableOverlay } from "./components/ReusableOverlay";
import { JobsPage } from "../pages/JobsPage";
import Header from "./components/Header";
import TopNavigation from "./components/TopNavigation";
import "./App.css";
import { JobPageProfileComponent } from "../pages components/JobPageProfileComponent";
import { CoursesPage } from "../pages/CoursesPage";

function App() {
  const [showWritePostCard, setShowWritePostCard] = useState(false);
  const [postTitle, setPostTitle] = useState(""); // State to capture post title
  const [postContent, setPostContent] = useState(""); // State to capture post content
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/posts");
        setPosts(response.data.posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  const handlePostData = async (newPost) => {
    try {
      const token = localStorage.getItem("token");
      console.log("Token value:", token);
      if (!token) {
        console.error("Token not found. User not logged in.");
        return;
      }
      // Save new post data to MongoDB
      const response = await axios.post("http://localhost:3000/post", newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      // Once the post is saved, update the state to include the new post
      setPosts([...posts, newPost]);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const handleShowWritePostCard = () => {
    setShowWritePostCard(true);
  };

  const hideWritePostCard = () => {
    setShowWritePostCard(false);
  };

  return (
    <BrowserRouter>
      <div className="header-TopNavigation">
        <Header />
        <TopNavigation />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div className="home-content">
              <div className="HomeSideBar-Container">
                <HomeSideBar
                  handleShowWritePostCard={handleShowWritePostCard}
                />
              </div>
              <div className="PostCard-container">
                {console.log(posts)}
                {posts.map((post) => (
                  <PostCard2 key={post._id} post={post} />
                ))}
              </div>
            </div>
          }
        />
        <Route path="/campus-jobs" element={<JobsPage />} />
        <Route path="/courses" element={<CoursesPage />} />
      </Routes>
      {showWritePostCard && <ReusableOverlay />}
      {showWritePostCard && (
        <WritePostCard
          hideWritePostCard={hideWritePostCard}
          setPostTitle={setPostTitle}
          setPostContent={setPostContent}
          handlePostData={handlePostData}
          postTitle={postTitle}
          postContent={postContent}
        />
      )}
    </BrowserRouter>
  );
}

export default App;
