import { useEffect, useState } from "react";
import CreatePostForm from "./CreatePost";
import Posts, { Post } from "./Post";

import { useLocation } from "react-router-dom";
import Modal from "./Modal";
import LoginAndRegister, { LoginMode } from "./LoginAndRegister";
const PostList = () => {
  const { user } = { user: "Jane" };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModalClose = () => {
    setIsModalVisible(false);
    window.history.pushState(null, document.title, window.location.pathname);
    // Removes the hash fragment from the URL
  };

  const [posts, setPosts] = useState<Post[]>([
    {
      emoji: ";)",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      userName: "Piyush Aryan",
      profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
      timestamp: "ISO(2021-09-01T00:00:00Z)",
      commentCount: 2,
    },
    {
      emoji: ":P",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      userName: "Piyush Aryan",
      profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
      timestamp: "2",
      commentCount: 2,
    },
  ]);

  const { hash } = useLocation();

  useEffect(() => {
    if (hash === "#login" || hash === "#register") {
      setIsModalVisible(true);
    } else {
      setIsModalVisible(false);
    }
  }, [hash]);

  const loginPopupMode =
    hash === "#login" ? LoginMode.LOGIN : LoginMode.REGISTER;

  const handleAddPost = (post: Post) => {
    setPosts((prevPosts) => [post, ...prevPosts]);
  };

  return (
    <>
      <Modal isOpen={isModalVisible} onClose={handleModalClose}>
        <LoginAndRegister mode={loginPopupMode} />
      </Modal>
      <div>
        <div className=" flex justify-center min-h-screen ">
          <div className="w-full max-w-3xl mx-3 ">
            <div className="greeting mt-[69px] text-[28px] font-medium">
              Hello {user}
            </div>
            <div className="sub-heading mt-3 text-[#7F8084] font-normal max-w-[580px] h-6 mb-10">
              How are you doing today? Would you like to share something with
              the community 🤗
            </div>
            <CreatePostForm handleAddPost={handleAddPost} />
            <div className="posts">
              {posts.map((post) => (
                <div className="mb-4" key={post.timestamp}>
                  <Posts {...post} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostList;
