"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
import { signIn } from 'next-auth/react';

export const SignInForm = () => {
  const router = useRouter();

  const handlerSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);

      const res = await signIn("credentials", {
        email: formData.get('email'),
        password: formData.get('password'),
        redirect: false
      })
      
      if (res && !res.error) {
        router.push("/profile");
      } else {
        console.log(res);        
      }
  } 
   
  return (
    <form className='p-8 dark:bg-slate-800 bg-slate-300 rounded-md shadow-md flex flex-col w-80 gap-5' onSubmit={handlerSubmit}>
      <label className='flex flex-col'>
        <span>email:</span>
        <input className='px-2 py-1 rounded' type="email" name="email" required />
      </label>
      <label className='flex flex-col'>
        <span>password:</span>
        <input className='px-2 py-1 rounded' type="password" name="password" required />
      </label>
      <button 
        className='px-2 py-1 border dark:bg-slate-500 dark:hover:bg-slate-300 hover:bg-slate-900 hover:border-slate-50 transition duration-100 dark:hover:text-slate-800 hover:text-slate-50 border-slate-500 rounded bg-slate-100' type="submit">
          Sign In
      </button>
    </form>
  );
};
