import React from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../../context/authContext'


export default function Navbar( {handleClick , cart} ) {

  const { user } = UserAuth()
  
  function refreshPage() {
    this.setState({})
  }

  return(
    <>
      <nav className='fixed z-50 top-0 w-full flex justify-between bg-gray-700 text-white h-16 shadow shadow-gray-800'>
        <div className='flex items-center'>
          <img className='h-10 ml-16 my-3 invert' src='https://img.icons8.com/ios-glyphs/512/engineering.png'></img>
          <p className=' font-bold text-xl'><Link to='/'>GadgetAlb</Link></p>
        </div>
        <div className=' flex items-center w-96 justify-between '>
          <a  className='peer relative flex flex-col items-center p-2 w-32 rounded transition hover:bg-gray-800 duration-300 cursor-pointer'>Products</a>
          <div  class=" z-10 top-[52px] hidden absolute peer-hover:block hover:block bg-gray-200 divide-y divide-gray-100 rounded-tl-none rounded-lg shadow-md w-44 ">
            <ul class="  py-2 text-md text-gray-800 font-semibold dark:text-gray-200" aria-labelledby="dropdownHoverButton">
              <Link onClick={refreshPage} to='/Smartphone' className='flex items-center justify-between hover:bg-gray-100 duration-200 '>
                <a class="block px-4 py-2 ">Smartphones</a>
                <svg className=' h-5 pr-2' viewBox="-4 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>phone [#225]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-384.000000, -7159.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M338,7002 C338,7001.448 337.552,7001 337,7001 L331,7001 C330.448,7001 330,7001.448 330,7002 L330,7016 C330,7016.552 330.448,7017 331,7017 L337,7017 C337.552,7017 338,7016.552 338,7016 L338,7002 Z M340,7001 L340,7017 C340,7018.105 339.105,7019 338,7019 L330,7019 C328.895,7019 328,7018.105 328,7017 L328,7001 C328,6999.895 328.895,6999 330,6999 L338,6999 C339.105,6999 340,6999.895 340,7001 L340,7001 Z M335.021,7014 C335.021,7014.552 334.573,7015 334.021,7015 C333.469,7015 333.021,7014.552 333.021,7014 C333.021,7013.448 333.469,7013 334.021,7013 C334.573,7013 335.021,7013.448 335.021,7014 L335.021,7014 Z" id="phone-[#225]"> </path> </g> </g> </g> </g></svg>
              </Link>
              <Link onClick={refreshPage} to='/Laptop' className='flex items-center justify-between hover:bg-gray-100 duration-200 '>
                <a class="block px-4 py-2 ">Laptops</a>
                <svg className=' h-5 pr-2' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="System / Laptop"> <path id="Vector" d="M4 17H3.5C2.67157 17 2 17.6716 2 18.5C2 19.3284 2.67157 20 3.5 20H20.5C21.3284 20 22 19.3284 22 18.5C22 17.6716 21.3284 17 20.5 17H20M4 17H20M4 17V8.2002C4 7.08009 4 6.51962 4.21799 6.0918C4.40973 5.71547 4.71547 5.40973 5.0918 5.21799C5.51962 5 6.08009 5 7.2002 5H16.8002C17.9203 5 18.4796 5 18.9074 5.21799C19.2837 5.40973 19.5905 5.71547 19.7822 6.0918C20 6.5192 20 7.07899 20 8.19691V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
              </Link>
              <Link onClick={refreshPage} to='/Console' className='flex items-center justify-between hover:bg-gray-100 duration-200 '>
                <a class="block px-4 py-2 ">Consoles</a>
                <svg className=' h-5 pr-2' viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>game_controller_round [#795]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-180.000000, -4719.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M142,4570 C142,4569.448 141.552,4569 141,4569 L127,4569 C126.448,4569 126,4569.448 126,4570 L126,4576 C126,4576.552 126.448,4577 127,4577 L141,4577 C141.552,4577 142,4576.552 142,4576 L142,4570 Z M144,4569 L144,4577 C144,4578.105 143.105,4579 142,4579 L126,4579 C124.895,4579 124,4578.105 124,4577 L124,4569 C124,4567.895 124.895,4567 126,4567 L133,4567 L133,4563 C133,4561.895 133.895,4561 135,4561 L137,4561 C137.552,4561 138,4560.552 138,4560 L138,4559 L140,4559 L140,4561 C140,4562.105 139.105,4563 138,4563 L136,4563 C135.448,4563 135,4563.448 135,4564 L135,4567 L142,4567 C143.105,4567 144,4567.895 144,4569 L144,4569 Z M138,4574 L140,4574 L140,4572 L138,4572 L138,4574 Z M135,4572 C134.448,4572 134,4572.448 134,4573 C134,4573.552 134.448,4574 135,4574 C135.552,4574 136,4573.552 136,4573 C136,4572.448 135.552,4572 135,4572 L135,4572 Z M131,4572 L132,4572 L132,4574 L131,4574 L131,4575 L129,4575 L129,4574 L128,4574 L128,4572 L129,4572 L129,4571 L131,4571 L131,4572 Z" id="game_controller_round-[#795]"> </path> </g> </g> </g> </g></svg>
              </Link>
              <Link onClick={refreshPage} to='/Gaming' className='flex items-center justify-between hover:bg-gray-100 duration-200 '>
                <a class="block px-4 py-2 ">Gaming</a>
                <svg className=' h-5 pr-2' viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>phone_desktop [#206]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -7239.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M284,7083 L286,7083 L286,7081 L302,7081 L302,7091 L295,7091 L295,7099 L301,7099 L301,7097 L297,7097 L297,7093 L304,7093 L304,7079 L284,7079 L284,7083 Z M286,7097 L292,7097 L292,7086 L286,7086 L286,7097 Z M284,7099 L294,7099 L294,7084 L284,7084 L284,7099 Z M288.042,7095 L290.042,7095 L290.042,7093 L288.042,7093 L288.042,7095 Z" id="phone_desktop-[#206]"> </path> </g> </g> </g> </g></svg>
              </Link>
              <Link onClick={refreshPage} to='/Accesories' className='flex items-center justify-between hover:bg-gray-100 duration-200 '>
                <a class="block px-4 py-2 ">Accesories</a>
                <svg className=' h-5 pr-2' viewBox="-3 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>watch [#1200]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-143.000000, -2799.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M97,2652 C97,2652.552 96.552,2653 96,2653 L90,2653 C89.448,2653 89,2652.552 89,2652 L89,2646 C89,2645.448 89.448,2645 90,2645 L96,2645 C96.552,2645 97,2645.448 97,2646 L97,2652 Z M91,2657 L95,2657 L95,2655 L91,2655 L91,2657 Z M91,2643 L95,2643 L95,2641 L91,2641 L91,2643 Z M100,2648 L99,2648 L99,2645 C99,2643.895 98.105,2643 97,2643 L97,2639 L89,2639 L89,2643 C87.895,2643 87,2643.895 87,2645 L87,2653 C87,2654.104 87.895,2655 89,2655 L89,2659 L97,2659 L97,2655 C98.105,2655 99,2654.104 99,2653 L99,2650 L100,2650 C100.552,2650 101,2649.552 101,2649 C101,2648.448 100.552,2648 100,2648 L100,2648 Z" id="watch-[#1200]"> </path> </g> </g> </g> </g></svg>
              </Link>
            </ul>
        </div>
          <Link onClick={refreshPage} to='/sherbimet'>    
            <a className='flex flex-col items-center p-2 w-32 rounded transition hover:bg-gray-800 duration-300 cursor-pointer'>Services</a>
          </Link> 
          <Link onClick={refreshPage} to='/contactUs'> 
            <a className='flex flex-col items-center p-2 w-32 rounded transition hover:bg-gray-800 duration-300 cursor-pointer'>Contact Us</a>
          </Link>
        </div>
        <div className='flex items-center w-80 justify-around'>
          <Link onClick={refreshPage} to={!user ? '/login' : '/account'}>
            <a className='flex flex-col items-center p-2 w-20 rounded transition hover:text-sky-300 duration-300 cursor-pointer'>
              <img className='h-6 w-6 invert' src='https://img.icons8.com/material-rounded/512/user.png'></img>
              <span className='text-sm'>Account</span>
            </a>
          </Link>
          <Link onClick={refreshPage} to='/liked'>
            <a className='flex flex-col items-center p-2 w-20 rounded hover:text-sky-300 duration-300 cursor-pointer'>
              <img className='h-6 w-6 invert' src='https://img.icons8.com/sf-black-filled/512/hearts.png'></img>
              <span className='text-sm'>Wish List</span>
            </a>
          </Link>
          <a onClick={handleClick} className=' relative flex flex-col items-center p-2 w-20 rounded hover:text-sky-300 duration-300 cursor-pointer'>
            <img className=' h-6 w-6 invert' src='https://img.icons8.com/material-outlined/512/shopping-bag.png'></img>
            <span className='text-sm'>Cart</span>
            <div className=' flex text-sm text-white absolute rounded-full bg-green-700 h-4 w-4 justify-center items-center top-1 right-5'>{cart.length}</div>
            </a>
        </div>
      </nav>
    </>
  )
}