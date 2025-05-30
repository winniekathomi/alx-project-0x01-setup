import { GetServerSideProps } from "next";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";  // Import PostProps interface

// Define the Posts component
const Posts: React.FC<{ posts: PostProps[] }> = ({ posts }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-semibold">Posts Page</h1>
        
        {/* Render a list of posts */}
        <div className="mt-4 space-y-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-200"
            >
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="mt-2 text-gray-700">{post.body}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

// Fetch posts from an external API
export const getServerSideProps: GetServerSideProps = async () => {
  // Mock API endpoint for posts data
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: PostProps[] = await res.json();

  return {
    props: {
      posts, // Pass fetched posts as props
    },
  };
};

export default Posts;
