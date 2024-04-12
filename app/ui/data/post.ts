import user from "../../../public/user.jpg"
import post from "../../../public/post.jpg"
import user2 from "../../../public/user2.jpg"
import post2 from "../../../public/post2.jpg"

export const tweetsData = [
    {
      profileImage: user,
      fullName: 'John Doe',
      verified: true,
      content: 'Tweet content 1.',
      image: post,
      commentsCount: 10,
      likesCount: 20,
      rePostsCount: 5,
    },
    {
      profileImage: user2,
      fullName: 'Jane Doe',
      verified: false,
      content: 'Tweet content 2.',
      image: post2,
      commentsCount: 5,
      likesCount: 15,
      rePostsCount: 3,
    },
    {
      profileImage: user,
      fullName: 'John Doe',
      verified: true,
      content: 'Tweet content 1.',
      image: "",
      commentsCount: 10,
      likesCount: 20,
      rePostsCount: 5,
    },
    {
      profileImage: user2,
      fullName: 'Jane Doe',
      verified: false,
      content: 'Tweet content 2.',
      image: "",
      commentsCount: 5,
      likesCount: 15,
      rePostsCount: 3,
      viewsCount: 100,
    },
    // Add more tweets as needed
];