import React from 'react';
import { Link } from 'react-router-dom'
import { UserAuth } from '../../context/authContext'

const Navbar = ( {handleClick , cart} ) => {

  const [isToggled, setIsToggled] = React.useState(false)

  function toggleHamburger() {
    setIsToggled(!isToggled)
  }

  const [isYeeted, setIsYeeted] = React.useState(false)

  function toggleYeet() {
    setIsYeeted(!isYeeted)
  }
  
  function dontMessToggle() {
    toggleYeet()
    refreshPage()
  }

  const { user } = UserAuth()
  
  function refreshPage() {
    this.setState({})
  }

  return (
    <>
      <nav class="fixed z-50 top-0 w-full text-[#323232] bg-[#ceb39c] shadow pr-5 dark:bg-gray-900 dark:border-gray-700">
        <div class=" flex flex-wrap items-center justify-between mx-auto p-4">
          <Link onClick={refreshPage} to='/GadgetAlb' class="flex items-center">
              <span class="self-center text-2xl font-bold  whitespace-nowrap dark:">GadgetAlb</span>
          </Link>
          <div className='flex'>
          <div className='flex pl-2 rounded justify-start items-center hover:cursor-pointer lg:hidden lg:border-0 ' onClick={handleClick}>
            <img className=' h-6 w-6 ' src='https://img.icons8.com/material-outlined/512/shopping-bag.png'></img>
            <a class="flex w-full py-2 pl-1  font-bold rounded lg:hover:text-black lg:p-0">({cart.length})</a>
          </div>
          <button onClick={toggleHamburger} type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
          </div>
          <div id={isToggled ? "toggled" : ""} class="hidden z-50 w-full lg:block lg:w-auto" >
            <ul class="flex flex-col font-medium p-4 lg:p-0 mt-4 mr-6 border border-gray-300 rounded-lg bg-white bg-opacity-20 backdrop-blur-lg text-black lg:flex-row lg:text-[#323232] lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-transparent ">
              <Link to='/GadgetAlb'>
                <a class="block py-2 pl-3 pr-4 rounded hover:backdrop-blur-sm lg:p-0 " aria-current="page">Home</a>
              </Link>
              <li>
                  <button onClick={toggleYeet} id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class=" flex items-center font-bold justify-between w-full py-2 pl-3 pr-4  rounded hover:backdrop-blur-sm lg:hover:bg-transparent lg:border-0 lg:hover:text-black lg:p-0 lg:w-auto dark: lgtext-blue-500 dark:focus: dark:border-gray-700bg-gray-700 lgbg-transparent">Products <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                  <div id={isYeeted ? 'yeeted' : ''} class=" hidden z-10 font-normal bg-[#ede3da] rounded-lg shadow-xl w-44">
                      <ul class="py-2 text-sm text-black" aria-labelledby="dropdownLargeButton">
                        <Link onClick={dontMessToggle} to='/GadgetAlb/Smartphone'>
                          <a class="block px-4 font-semibold py-2 hover:bg-[#f9f6f3]">Smartphone</a>
                        </Link>
                        <Link onClick={dontMessToggle} to='GadgetAlb/Laptop'>
                          <a class="block px-4 font-semibold py-2 hover:bg-[#f9f6f3]">Laptop</a>
                        </Link>
                        <Link onClick={dontMessToggle} to='GadgetAlb/Console' >
                          <a class="block px-4 font-semibold py-2 hover:bg-[#f9f6f3]">Consoles</a>
                        </Link>
                        <Link onClick={dontMessToggle} to='GadgetAlb/Gaming'>
                          <a class="block px-4 font-semibold py-2 hover:bg-[#f9f6f3]">Gaming</a>
                        </Link>
                        <Link onClick={dontMessToggle} to='GadgetAlb/Accesories'>
                          <a class="block px-4 font-semibold py-2 hover:bg-[#f9f6f3]">Accesories</a>
                        </Link>
                      </ul>
                  </div>
              </li>
              <Link onClick={refreshPage} to='GadgetAlb/sherbimet'>
                <a class="block py-2 pl-3 pr-4  rounded hover:backdrop-blur-sm lg:border-0 lg:hover:text-black lg:p-0">Services</a>
              </Link>
              <Link onClick={refreshPage} to='GadgetAlb/contactUs'>
                <a class="block py-2 pl-3 pr-4  rounded hover:backdrop-blur-sm lg:hover:bg-transparent lg:border-0 lg:hover:text-black lg:p-0">Contact Us</a>
              </Link>
              <Link className='flex pl-2 rounded justify-start items-center hover:cursor-pointer hover:backdrop-blur-sm lg:hover:bg-transparent lg:border-0' onClick={refreshPage} to={!user ? '/GadgetAlb/login' : '/GadgetAlb/account'}>
                <img className='h-5 w-5 mr-1 ' src='https://img.icons8.com/material-rounded/512/user.png'></img>
                <a class="flex w-full py-2 pl-3 pr-4  font-bold rounded lg:hover:text-black lg:p-0 ">Account</a>
              </Link>
              <Link className='flex pl-2 rounded justify-start items-center hover:cursor-pointer hover:backdrop-blur-sm lg:hover:bg-transparent lg:border-0'  onClick={refreshPage} to='/GadgetAlb/liked'>
                <img className='h-5 w-5 ' src='https://img.icons8.com/sf-black-filled/512/hearts.png'></img>
                <a class="flex w-full py-2 pl-3 pr-4  font-bold rounded lg:hover:text-black lg:p-0">Liked</a>
              </Link>
              <div className='hidden pl-2 rounded justify-start items-center hover:cursor-pointer hover:backdrop-blur-sm lg:flex lg:hover:bg-transparent lg:border-0 ' onClick={handleClick}>
                <img className=' h-6 w-6 mr-1 ' src='https://img.icons8.com/material-outlined/512/shopping-bag.png'></img>
                <a class="flex w-full py-2 pl-3 pr-4  font-bold rounded lg:hover:text-black lg:p-0">Cart ({cart.length})</a>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      <div id={isToggled ? 'activeBg' : ''} onClick={toggleHamburger} className=' z-40 fixed top-0 right-0 w-full h-full invisible'></div>
      
    </>
  );
};

export default Navbar;
