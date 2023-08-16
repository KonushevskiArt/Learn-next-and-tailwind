import { Metadata } from 'next';
import React from 'react';
import PostSearch from './components/postSearch/PostSearch';
import Posts from './components/posts/Posts';


export const metadata: Metadata = {
  title: 'blog'
}

const Blog = () => {
  return (
    <>
      <h1 className="text-3xl text-center my-6">My Blog</h1>
      <PostSearch/>
      <Posts />
    </>
  );
};

export default Blog;