"use client"
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import React, { useEffect, useState } from 'react';

const Providers = ({children}: {children: React.ReactNode }) => {
  // const [mounted, setMounted] = useState(false)

  // useEffect(() => {
  //   setMounted(true)
  // }, [])

  // if (!mounted) {
  //   return null
  // }
  return (
    <SessionProvider>
      <ThemeProvider attribute="class">
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
};

export {Providers};