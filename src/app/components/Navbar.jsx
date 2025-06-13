import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="flex w-1/2 *:cursor-pointer justify-between mx-auto my-4">
      <Link href={'/'}>Home</Link>
      <Link href={'/services'}>Services</Link>
      <Link href={'/about'}>About</Link>
    </div>
  );
};

export default Navbar;
