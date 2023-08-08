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
  console.log(session);
  
  return (
    <nav className='text-base flex justify-end h-full'>
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
        <Link className='nav-link' href={"#"} onClick={() => signOut({
          callbackUrl: '/'
        })}>
          Sign Out
        </Link>
      )
      : 
      (<Link className='nav-link' href={"/auth/signin"}>Sing In</Link>)}
    </nav>
  );
};

export default Navigation;