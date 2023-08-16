import { Metadata } from 'next';
import React from 'react';
import Image from 'next/image';
import img from '@/assets/batman.jpg';

export const metadata: Metadata = {
  title: 'blog'
}


const about = () => {
  return (
    <>
      <h3 className="text-xl text-center pt-5">
        Select subitem 
      </h3>
      <Image 
        src={img}
        alt={"batmen's photo"}
      />
    </>
  );
};

export default about;