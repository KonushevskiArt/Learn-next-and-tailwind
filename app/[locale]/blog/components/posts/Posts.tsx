"use client";
import { getAllPosts } from '@/app/services/getPosts';
import Link from 'next/link';
import React from 'react';
import useSWR from 'swr';

const Posts = () => {
  const {data: posts, isLoading} = useSWR('posts', getAllPosts)
  
  return (
    <>
      {isLoading 
      ? <p className="text-3xl text-center my-6">Loading...</p> 
      : (
        <ul className='list-decimal ml-5'>
          {posts.map((post: any) => 
            (<li className='post' key={post.id}>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>)
          )}
        </ul>
        )}
    </>
  );
};

export default Posts;