"use client";


import React, { useEffect, useState } from "react";
import BlogComponent from "../components/blogcomponents";

export default function BlogPage() {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    async function getAllBlog() {
      const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/posts");
      const data = await res.json();
      setBlog(data?.posts);
      return data;
    }
    getAllBlog();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {blog?.map(({ id, title, body }, _) => (
        <BlogComponent id={id} title={title} body={body} key={_} />
      ))}
    </div>
  );
}
