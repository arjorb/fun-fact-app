import React from 'react';

const Header = props => {
  return (
    <div className='flex justify-between items-center py-7 px-5 shadow-lg'>
      <img src='./logo.svg' alt='logo' />
      <div className='flex gap-3 items-center'>
        <span className={`font-bold text-lg ${props.mode ? 'text-[#2B283A]' : 'text-gray-500'} `}>light</span>
        <div className='bg-[#2B283A] w-12 rounded-full'>
          <div className='bg-white rounded-full w-6 h-6' onClick={props.handleMode}></div>
        </div>
        <span className={`font-bold text-lg ${props.mode ? 'text-gray-300' : 'text-white'}`}>dark</span>
      </div>
    </div>
  );
};

export default Header;
