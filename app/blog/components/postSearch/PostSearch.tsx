"use client"
import { getPostsBySearch } from '@/app/services/getPosts';
import React, { useState } from 'react';
import useSWR from 'swr';

const PostSearch = () => {
  const {mutate, isLoading} = useSWR('posts');
  const [search, setSearch] = useState("");
  
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const posts = await getPostsBySearch(search);

    mutate(posts)
  }

  return (
    <form className='flex justify-center my-5 gap-3' onSubmit={handleSubmit}>
      <input 
        className='post-search-input'
        type="search" 
        placeholder='search'
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        />
        <button
          className='post-search-btn'
          type="submit"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>

          search
        </button>
    </form>
  );
};

export default PostSearch;