import React from 'react';
import '../src/styles/tailwind.scss';

const Layout = ({ children }) => {
  return (
    <div className="p-3">
      {children}
    </div>
  )
}

export default Layout;
