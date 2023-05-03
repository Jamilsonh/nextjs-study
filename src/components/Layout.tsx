import Link from 'next/link';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className='bg-gray-600 w-screen h-screen flex-row justify-center items-center'>
      <div className='w-full h-1/6 flex items-center justify-center'>
        <div className='w-2/4 flex justify-around border-sky-500 text-xl '>
          <Link
            href='/'
            className='bg-slate-200 px-6 py-1 rounded-xl items-center text-slate-900 hover:bg-sky-200'
          >
            Page 1
          </Link>
          <Link
            href='/jokenpo'
            className='bg-slate-200 px-6 py-1 rounded-xl items-center text-slate-900 hover:bg-sky-200'
          >
            Page 2
          </Link>
        </div>
      </div>
      <main className='w-full h-5/6 flex justify-center items-center'>
        {children}
      </main>
    </div>
  );
}

export default Layout;
