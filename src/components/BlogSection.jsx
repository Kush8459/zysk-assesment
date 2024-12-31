import { avatar, avatar2, avatar3, blog1, blog2, blog3 } from "../assets";

function BlogSection() {
  const blogPosts = [
    {
      category: "Design",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      author: "Olivia Ryhe",
      date: "20 Jan 2024",
      imageUrl: blog1,
      avatar: avatar,
    },
    {
      category: "Product",
      title: "Migrating to Linear 101",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
      author: "Phoenix Baker",
      date: "19 Jan 2024",
      imageUrl: blog2,
      avatar: avatar2,
    },
    {
      category: "Software Engineering",
      title: "Building your API stack",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      author: "Lana Steiner",
      date: "18 Jan 2024",
      imageUrl: blog3,
      avatar: avatar3,
    },
  ];

  return (
    <div className="py-12 mt-8">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex justify-between px-4 mb-8">
          <div>
            <h1 className="text-xl font-bold text-purple-600">Our blog</h1>
            <h2 className="text-3xl font-bold mt-4">Latest blog posts</h2>
            <p className="text-gray-600 text-2xl mt-4">
              Tool and strategies modern teams need to help their companies
              grow.
            </p>
          </div>
          <div>
            <button className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition-colors w-40 hidden sm:block">
              View all posts
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="py-4 flex flex-col justify-around rounded-lg"
            >
              <img
                src={post.imageUrl}
                alt={post.title}
                className="rounded w-full mb-4"
              />
              <div className="text-lg font-bold py-3 text-purple-600">
                {post.category}
              </div>
              <h3 className="font-semibold mb-2 text-lg">{post.title}</h3>
              <p className="text-gray-600 mb-6">{post.description}</p>
              <div className="text-gray-500 flex text-sm">
                <img
                  src={post.avatar}
                  alt={post.title}
                  className="rounded w-12 h-12 mb-4"
                />
                <div className="ml-2 text-left">
                  <p className="font-bold">{post.author}</p>
                  <p>{post.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center w-full">
          <button className="bg-purple-600 w-full text-white px-6 py-2 rounded hover:bg-purple-700 transition-colors sm:hidden">
            View all posts
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
