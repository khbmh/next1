'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

const page = () => {
  const router = useRouter();
  const isLoggedIn = true;
  const handleNavigation = () => {
    if (isLoggedIn) {
      router.push('/about/address');
    } else {
      router.push('/');
    }
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-center text-6xl">about page</h1>
      <button
        type="button"
        className="mt-14 border px-3 py-2 hover:border-[#4e4e4e] cursor-pointer"
        onClick={handleNavigation}
      >
        address
      </button>
    </div>
  );
};

export default page;
