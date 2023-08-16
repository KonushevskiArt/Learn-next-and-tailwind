'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';

type NavLink = {
  label: string;
  href: string;
}

type Props = {
  navLinks: NavLink[];
}

const Navigation = ({ navLinks }: Props) => {
  const pathName = usePathname();
  const session = useSession();
  // console.log(session);
  // const linkClasses = 
  
  return (
    <>
      <nav className='hidden md:flex text-base justify-end h-full'>
        {navLinks.map((link) => {
          const isActive = pathName === link.href;
          const classes = isActive ?
            'nav-link_active'
            : 
            'nav-link'
          return (
            <Link
              key={link.label}
              href={link.href}
              className={classes}
            >
              {link.label}
            </Link> 
          )
        })}
        {session?.data && (
          <Link className='nav-link' href={"/profile"}>Profile</Link>
        )}
        {session?.data 
        ? (
          <Link className={'nav-link'} href={"#"} onClick={() => signOut({
            callbackUrl: '/'
          })}>
            Sign Out
          </Link>
        )
        : 
        (<Link className={pathName === "/auth/signin" ? 'nav-link_active' : 'nav-link'} href={"/auth/signin"}>Sing In</Link>)}
      </nav>
      <div className='md:hidden flex h-full items-center pr-5'>
        <button className='px-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Navigation;