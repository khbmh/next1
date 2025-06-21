import Link from 'next/link';
import React from 'react';

const notfound = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="block text-5xl mr-8">Not founD 404</h1>

        <Link className="inline-block border py-2 px-4" href="/">
          Back to Home
        </Link>
      </div>
    </>
  );
};

export default notfound;
