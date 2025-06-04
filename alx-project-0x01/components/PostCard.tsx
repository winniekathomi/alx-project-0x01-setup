// components/PostCard.tsx
import React from "react";

interface PostCardProps {
  title: string;
  body: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, body }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 my-4 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2">{body}</p>
    </div>
  );
};

export default PostCard;
