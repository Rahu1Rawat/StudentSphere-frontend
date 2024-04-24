import axios from "axios";
import "../css/WritePostCard.css";
import postCrossIcon from "../images/icons/cross-icon.png";
import pollIcon from "../images/icons/poll-icon2.png";
export const WritePostCard = ({
  hideWritePostCard,
  setPostTitle,
  setPostContent,
  handlePostData,
  postTitle,
  postContent,
}) => {
  const handleSubmit = () => {
    // Prepare new post object
    const newPost = {
      title: postTitle,
      content: postContent,
    };
    // Call handlePostData with new post data
    handlePostData(newPost);
    // Hide the write post card after posting
    hideWritePostCard();
  };
  return (
    <div className="write-post-card-div">
      <div>
        <div className="cross-topic-post">
          <img src={postCrossIcon} alt="close" onClick={hideWritePostCard} />
          <p>TOPICS</p>
          <button onClick={handleSubmit}>POST</button>
        </div>
        <div className="write-post-dropdown">Choose a topic Dropdown!</div>
        <div className="write-post-input">
          <input
            type="text"
            placeholder="Write a specific title"
            onChange={(e) => {
              setPostTitle(e.target.value);
            }}
          />
        </div>
        <div className="write-post-textarea">
          <textarea
            name="content"
            id="content"
            placeholder="Keep it relevant. If the community flags your post for going off topic it will be invisible to the community."
            onChange={(e) => {
              setPostContent(e.target.value);
            }}
          ></textarea>
        </div>
      </div>
      <div className="write-post-bottomMost">
        <div className="write-post-bottomLeft">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
            />
          </svg>
          <img src={pollIcon} alt="poll" className="write-post-pollIcon" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5"
            />
          </svg>
        </div>
        <div className="write-post-bottomRight">
          <input type="checkbox" name="myCheckbox" />
          <label htmlFor="myCheckbox">Hide University Name</label>
        </div>
      </div>
    </div>
  );
};
