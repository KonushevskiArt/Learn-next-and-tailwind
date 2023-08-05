import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'blog'
}


const about = () => {
  return (
    <h3 className="text-xl text-center pt-5">
      select subitem 
    </h3>
  );
};

export default about;