"use client"

import { usePathname } from 'next/navigation';
import React from 'react';

const Footer = () => {
  const path = usePathname();
  if (!path.includes('dashboard')) {
    return (
      <div>
        <p className="text-center my-4 py-2 bg-amber-900">Made by Mahi</p>
      </div>
    );
  } else {
    <></>;
  }
};

export default Footer;
