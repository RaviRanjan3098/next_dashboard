'use client';

import React, { useEffect, useState } from 'react';

const Page = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await res.json();
        setPost(data);
      } catch (error) {
        console.error('Failed to fetch post:', error);
      } finally {
        setLoading(false);
      }
    };

    getPost();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Home Page</h1>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
    </div>
  );
};

export default Page;