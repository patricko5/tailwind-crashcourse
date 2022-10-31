import Head from "next/head";
import { Fragment } from "react";
import { useRouter } from "next/router";
import BlogItem from "../components/blogItem/BlogItem";
const HomePage = () => {
  const BLOG_POSTS = [
    {
      id: 1,
      title: "First Blog",
      image:
        "https://images.unsplash.com/photo-1526568929-7cdd510e77fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
      description: "This is my first blog, really excited",
      details: "How it all began",
    },
    {
      id: 2,
      title: "Second Blog",
      image:
        "https://images.unsplash.com/photo-1526568929-7cdd510e77fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
      description: "This is my second blog, really excited",
      details: "This blog is ultimately impressive",
    },
  ];
  return (
    <div>
      <h1 className="font-Montserrat">Blog Page</h1>
      {BLOG_POSTS.map((blog) => (
        <div key={blog.id} className="flex flex-col">
          <BlogItem
            title={blog.title}
            image={blog.image}
            description={blog.description}
            details={blog.details}
          />
        </div>
      ))}
    </div>
  );
};
export default HomePage;
