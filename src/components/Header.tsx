import React, { useState } from 'react';
import { headerData } from '../data/data';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="p-4 fixed w-full top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center transition duration-500 ease-in-out">
        <h1 className="hidden sm:block ml-8 lg:text-3xl lg:transition-transform lg:duration-500">
          <a href="/">
            <img src='/profile_logo.png' alt='logo' className='h-auto w-10'/>
          </a>
        </h1>
        <div className="md:hidden flex ">
          <button onClick={() => setIsOpen(!isOpen)} className="text-xl z-50">
            {isOpen ? <RxCross2 className="text-2xl" /> : <GiHamburgerMenu className="text-2xl" />}
          </button>
        </div>
        <nav className={`${isOpen ? '' : 'scale-y-0 opacity-0'} absolute left-0 right-0 p-4 top-full transform transition-all duration-500 ease-out md:relative md:scale-y-100 md:opacity-100 md:p-0 md:transform-none`}>
          <ul className='flex flex-col space-y-4 items-center md:flex-row md:space-x-5 md:space-y-0'>
            {headerData.map((item) => (
              <li key={item.id} className="list-none text-2xl">
                <a href={item.link} className="text-base hover:text-blue-500">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
