import React, { useState } from 'react';
import Header from '../../components/layout/Header';
import PostCard from '../../components/common/PostCard';
import PostModal from '../../components/common/PostModal';
import { PostProps, PostData } from '../../interfaces';

const Posts: React.FC<{ posts: PostProps[] }> = ({ posts }) => {
  const [post, setPost] = useState<PostData | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (postData: PostData | null = null) => {
    setPost(postData);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false); // ✅ Fixed: was wrongly typed as setIsModalOpen
    setPost(null);
  };

  const submitPost = (postData: PostData) => {
    console.log('Submitted post:', postData);
    closeModal();
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-semibold">Posts Page</h1>
        <button
          onClick={() => openModal(null)}
          className="my-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Create New Post
        </button>
        <div className="space-y-6">
          {posts.map((postItem) => (
            <PostCard key={postItem.id} post={postItem} />
          ))}
        </div>

        {isModalOpen && post !== null && (
          <PostModal post={post} onClose={closeModal} onSubmit={submitPost} />
        )}
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: PostProps[] = await res.json();

  return {
    props: { posts },
  };
}

export default Posts;
