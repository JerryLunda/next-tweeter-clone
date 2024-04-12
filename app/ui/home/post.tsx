import React from "react";
import Image from "next/image";
import certfied_icon from "../../../public/certfied_icon.svg";
import comment_icon from "../../../public/comment_icon.svg";
import repost_icon from "../../../public/repost_icon.svg";
import like_icon from "../../../public/like_icon.svg";
import share_icon from "../../../public/share_icon.svg";

interface PostProps {
  profileImage: string;
  fullName: string;
  verified: boolean;
  content: string;
  image?: string;
  commentsCount: number;
  likesCount: number;
  rePostsCount: number;
}

const Post: React.FC<PostProps> = ({
  profileImage,
  fullName,
  verified,
  content,
  image,
  commentsCount,
  likesCount,
  rePostsCount,
}) => {
  return (
    <div className="flex p-4  border border-gray-200 ">
      <div className="flex-shrink-0 mr-3">
        <Image
          src={profileImage}
          alt="Profile Image"
          className="w-12 h-12 rounded-full"
          width={48}
          height={48}
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center mb-1">
          <p className="mr-1 font-bold">{fullName}</p>
          {verified && <Image src={certfied_icon} alt="certfied user" />}
        </div>
        <p className="mb-3">{content}</p>
        {image && (
          <div className="mb-3">
            <Image
              src={image}
              alt="Post Image"
              className="rounded-lg"
              width={500}
              height={300}
            />
          </div>
        )}
        <div className="flex items-center justify-between space-x-4 text-gray-500">
          <p className=" flex gap-1">
            {" "}
            <Image src={comment_icon} alt="comment count" />{" "}
            <span>{commentsCount}</span>
          </p>
          <p className=" flex gap-1">
            <Image src={like_icon} alt="like count" />
            <span>{likesCount}</span>
          </p>
          <p className=" flex gap-1">
            <Image src={repost_icon} alt="respost count" />
            <span>{rePostsCount}</span>
          </p>
          <Image src={share_icon} alt="share post" />
        </div>
      </div>

      <hr />
    </div>
  );
};

export default Post;
