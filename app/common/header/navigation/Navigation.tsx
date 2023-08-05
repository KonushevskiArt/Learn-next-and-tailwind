'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLink = {
  label: string;
  href: string;
}

type Props = {
  navLinks: NavLink[];
}

const Navigation = ({ navLinks }: Props) => {
  const pathName = usePathname();

  return (
    <nav className='text-base flex justify-end h-full'>
      {navLinks.map((link) => {
        const isActive = pathName === link.href;
        const classes = isActive ?
          'nav-link'
          : 
          'nav-link_active'
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
    </nav>
  );
};

export default Navigation;