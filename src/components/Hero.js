import React from 'react';

const Hero = props => {
  return (
    <div className='px-5 py-10 relative pb-16 z-0'>
      <h1 className='text-4xl font-bold my-10'>Fun facts about React</h1>
      <ul className=' space-y-5'>
        <div className='flex gap-2 items-center'>
          <img src='./circle.svg' alt='bullet' /> <li>Was first released in 2013</li>
        </div>
        <div className='flex gap-2 items-center'>
          <img src='./circle.svg' alt='bullet' /> <li>Was originally created by Jordan Walke</li>
        </div>
        <div className='flex gap-2 items-center'>
          <img src='./circle.svg' alt='bullet' /> <li>Has well over 100K stars on GitHub</li>
        </div>
        <div className='flex gap-2 items-center'>
          <img src='./circle.svg' alt='bullet' /> <li>Is maintained by Facebook</li>
        </div>
        <div className='flex gap-2 items-center'>
          <img src='./circle.svg' alt='bullet' />
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </div>
      </ul>
      <div>
        <img
          src={`${props.mode ? './reactjs-icon.svg' : './reactjs-icon2.svg'}`}
          alt='backgound icon'
          className=' absolute right-0 bottom-10 -z-10'
        />
      </div>
    </div>
  );
};

export default Hero;
