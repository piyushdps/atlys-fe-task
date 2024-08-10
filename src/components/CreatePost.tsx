import EmojiPicker, { Theme } from "emoji-picker-react";
import { useState } from "react";
import Emoji from "react-emoji-render";
import { Post } from "./Post";
import { RegisterOptions, useForm } from "react-hook-form";

type CreatePostFormProps = {
  /** Function to add a new post can be sent to the request handler */
  handleAddPost: (post: Post) => void;
};

/**
 *
 * @param param0
 * @description CreatePostForm component to create a new post
 */

type NewPostForm = {
  postData: string;
};

const CreatePostForm = ({ handleAddPost }: CreatePostFormProps) => {
  const [showPicker, setShowPicker] = useState(false);
  const [emoji, setEmoji] = useState("💬");

  const validations: {
    [T in keyof NewPostForm]: RegisterOptions<NewPostForm, T>;
  } = {
    postData: {
      required: "Post data is required",
    },
  };

  const { register, handleSubmit } = useForm<NewPostForm>({
    defaultValues: {
      postData: "",
    },
    mode: "onTouched",
  });

  const handleCreatePostForm = handleSubmit((data: NewPostForm) => {
    const postData = data.postData;
    if (!postData) return;
    const timestamp = new Date().toISOString();
    const user = "Jane";

    handleAddPost({
      userName: user,
      profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
      commentCount: 0,
      emoji,
      text: postData,
      timestamp,
    });
  });

  return (
    <form onSubmit={handleCreatePostForm}>
      <div className="bg-[#27292D] p-4 rounded-lg w-full mx-auto mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-400 text-lg font-medium mb-2"
            htmlFor="post"
          >
            Create post
          </label>
          <div className="w-full flex px-4 py-4 text-gray-200 bg-[#191920] border gap-4 border-[#35373B] rounded-md focus:outline-none ">
            <div className="w-16">
              <div
                className="icon-holder flex items-center justify-center rounded-full bg-[#27292D] relative"
                style={{ width: "48px", height: "48px" }}
                onClick={() => setShowPicker(true)}
                aria-label="Select an emoji"
                aria-expanded={showPicker}
                aria-controls="emoji-picker"
              >
                <Emoji text={emoji} />
                {showPicker && (
                  <div
                    id="emoji-picker"
                    className="absolute"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Emoji picker"
                  >
                    <EmojiPicker
                      theme={Theme.DARK}
                      onEmojiClick={(emojiObject) => {
                        setEmoji(emojiObject.emoji);
                        setShowPicker(false);
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
            <textarea
              id="post"
              placeholder="How are you feeling today?"
              className="bg-transparent w-full focus:outline-none pt-3 resize-none"
              aria-label="Write your post"
              {...register("postData", validations.postData)}
            />
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <button
            className="w-[111px] bg-[#4A96FF]  py-2 rounded-sm active:scale-95"
            aria-label="Post your status"
            type="submit"
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreatePostForm;
