import { GetServerSideProps } from "next";
import Header from "@/components/layout/Header";
import { PostProps, UserProps } from "@/interfaces"; // Import interfaces for Post and User

// Define the PostDetail component
const PostDetail: React.FC<{ post: PostProps; user: UserProps }> = ({ post, user }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-semibold">Post Details</h1>

        {/* Post Content */}
        <div className="mt-6">
          <div className="border p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold">{post.title}</h2>
            <p className="mt-4 text-lg text-gray-700">{post.body}</p>
          </div>
        </div>

        {/* User Info */}
        <div className="mt-8 border-t pt-6">
          <h3 className="text-xl font-semibold">Author: {user.name}</h3>
          <p className="mt-2 text-gray-600">Email: {user.email}</p>
          <p className="mt-1 text-gray-600">Phone: {user.phone}</p>
          <p className="mt-1 text-gray-600">Website: <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600">{user.website}</a></p>
        </div>
      </main>
    </div>
  );
};

// Fetch the post and user data for the given post ID
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const postId = params?.id;

  // Fetch post data
  const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const post: PostProps = await postRes.json();

  // Fetch user data (using post.userId to get the correct user)
  const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
  const user: UserProps = await userRes.json();

  return {
    props: {
      post, // Pass the fetched post data as props
      user, // Pass the fetched user data as props
    },
  };
};

export default PostDetail;
