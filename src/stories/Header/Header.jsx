import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronDown, ChevronUp } from 'react-feather';

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header>
      <nav className="flex items-center justify-center flex-wrap bg-transparent text-gray-50 p-6 fixed w-full z-10 top-0">
        <div className="max-w-md w-full">
          <div className="flex items-center flex-shrink-0">
            <img className="h-14" src="/logo192.png" alt="2Toms Brewing Company logo" />
          </div>
        </div>

        <div className="flex items-center">
          <ul className="list-reset flex flex-row">
            <li className="mr-3">
              <a className="text-2xl inline-block px-4 text-gray-50 hover:text-gray-200" href="#">Link 1</a>
            </li>
            <li className="mr-3" onMouseOutCapture={() => setDropdownOpen(false)} onMouseOver={() => setDropdownOpen(true)}>
              <span className='text-2xl inline-block px-4 text-gray-50 hover:text-gray-200 cursor-pointer' onClick={() => setDropdownOpen((prevState) => !prevState)} id="dropdown">
                <span className='flex flex-row items-baseline pb-2'>
                  Dropdown

                  {dropdownOpen ? <>
                    <ChevronUp className='ml-2 text-gray-50' size={16} />

                  </> :
                    <>
                      <ChevronDown className='ml-2 text-gray-50' size={16} />
                    </>
                  }
                </span>
              </span>
              {/* Dropdown Content */}
              <div id="dropdown-content" className={['relative min-w-full transition-all ease-in-out delay-100', !dropdownOpen && 'hidden'].filter(Boolean).join(" ")}>
                <div className="ml-4 absolute min-w-max py-1 bg-gray-100">
                  <ul>
                    <li className="py-1 pl-0 pr-8 hover:bg-gray-200 flex items-center">
                      <a className="text-xl inline-block px-4 text-gray-800" href="#">Dropdown Link 1</a>
                    </li>
                    <li className="py-1 pl-0 pr-8 hover:bg-gray-200 flex items-center">
                      <a className="text-xl inline-block px-4 text-gray-800" href="#">Long Dropdown Link 2</a>
                    </li>
                    <li className="py-1 pl-0 pr-8 hover:bg-gray-200 flex items-center">
                      <a className="text-xl inline-block px-4 text-gray-800" href="#">Super Duper Long Dropdown Link 3</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="mr-3">
              <a className="text-2xl inline-block px-4 text-gray-50 hover:text-gray-200" href="#">Link 2</a>
            </li>
            <li className="mr-3">
              <a className="text-2xl inline-block px-4 text-gray-50 hover:text-gray-200" href="#">Link 3</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>


  )
};

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
