// pages/posts/index.tsx
import React, { useState } from 'react';
import PostModal from '../../components/common/PostModal';
import { PostData } from '../../interfaces';

const Posts = () => {
  const [post, setPost] = useState<PostData | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (postData: PostData | null) => {
    setPost(postData);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = (postData: PostData) => {
    // Your submit logic here (create or update post)
    console.log('Submitted post:', postData);
    closeModal();
  };

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={() => openModal(null)}>Create New Post</button>

      {/* You can list posts here if you have them */}

      {isModalOpen && (
        <PostModal post={post} onClose={closeModal} onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default Posts;
