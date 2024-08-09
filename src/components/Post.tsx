import Emoji from "react-emoji-render";
import CommentSvg from "../assets/comment.svg";
import timeAgo from "../utils/timeAgo";

export type Post = {
  emoji: string;
  text: string;
  userName: string;
  profilePic: string;
  timestamp: string;
  commentCount: number;
};

/**
 *
 * @param props
 * @description Post component to display a single post
 */
const Post = (props: Post) => {
  return (
    <div>
      <div className="bg-[#27292D] p-4 rounded-lg w-full mx-auto">
        <div className="mb-4">
          <div className="profile-details flex justify-between">
            <div className="profile-pic flex mb-5 items-center">
              <img
                src={props.profilePic}
                alt="PP"
                className="rounded-full w-11 h-11"
              />
              <div>
                <div className="text-white font-medium ml-3">
                  {props.userName}
                </div>
                <div className="text-gray-400 text-sm ml-3">
                  {timeAgo(props.timestamp)}
                </div>
              </div>
            </div>
            <div className="menu cursor-pointer pr-3 text-xl ">...</div>
          </div>
          <div className="w-full flex px-4 py-4 text-gray-200 bg-[#191920] border gap-4 border-[#35373B] rounded-md focus:outline-none ">
            <div className="w-16">
              <div
                className="icon-holder flex items-center justify-center rounded-full bg-[#27292D] relative"
                style={{ width: "48px", height: "48px" }}
              >
                <Emoji text={props.emoji} />
              </div>
            </div>
            <p
              id="post"
              className="bg-transparent w-full overflow-hidden focus:outline-none pt-1 resize-none text-[#7F8084] whitespace-pre-wrap"
            >
              {props.text}
            </p>
          </div>
        </div>
        <div className="flex gap-3 text-[#7F8084]">
          <img src={CommentSvg} />{" "}
          <span className=" text-sm">{props.commentCount} comments</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
