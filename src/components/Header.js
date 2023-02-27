import React from 'react';

const Header = () => {
  return (
    <div className='flex justify-between items-center py-5 px-5'>
      <img src='./logo.svg' alt='logo' />
      <div className='flex gap-3 items-center'>
        <span className='font-bold text-lg'>light</span>
        <div className='bg-[#2B283A] w-12 rounded-full'>
          <div className='bg-white rounded-full w-6 h-6'></div>
        </div>
        <span className='font-bold text-lg text-gray-300'>dark</span>
      </div>
    </div>
  );
};

export default Header;
