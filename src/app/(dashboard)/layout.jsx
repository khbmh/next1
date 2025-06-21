import React from 'react';

const DashboardLayout = ({ children }) => {
  return (
    <div className="w-full grid grid-cols-6 bg-amber-950">
      <div className="col-span-1 bg-slate-900 h-screen">
        <p>Add</p>
        <p>Update</p>
        <p>Delete</p>
        <p>Read</p>
      </div>
      <div className="col-span-5">{children}</div>
    </div>
  );
};

export default DashboardLayout;
