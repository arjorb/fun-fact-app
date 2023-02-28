import React from 'react';

const Header = props => {
  return (
    <div className='flex justify-between items-center py-7 px-5 shadow-xl'>
      <img src='./logo.svg' alt='logo' />
      <div className='flex gap-3 items-center'>
        <span className={`font-bold text-lg ${props.mode ? 'text-[#2B283A]' : 'text-gray-500'} `}>light</span>
        <div
          className={`${props.mode ? 'bg-[#2B283A]' : 'bg-white'} w-8 rounded-full cursor-pointer`}
          onClick={props.handleMode}
        >
          <div
            className={`${
              props.mode ? 'bg-white translate-x-0' : 'bg-[#2B283A] translate-x-4'
            } rounded-full w-4 h-4 duration-300`}
          ></div>
        </div>
        <span className={`font-bold text-lg ${props.mode ? 'text-gray-300' : 'text-white'} `}>dark</span>
      </div>
    </div>
  );
};

export default Header;
