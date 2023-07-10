import React from 'react'
import { Outlet, Link, useParams, useLocation, useNavigate } from "react-router-dom";
import { cardsData } from '../data/cardsData';
import back from '../../stockPhotos/back.png'

const fullCard = ( {purchase, cart} ) => {

  const { productId } = useParams()
  const { pathname } = useLocation()

  const singleProduct = cardsData.find(product => product.id === parseInt(productId))

  const { id, name, url, price, info , type } = singleProduct

  function refreshPage() {
    this.setState({})
  }

  const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}

  return (
      <div className=" min-h-screen py-20 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-orange-900 via-amber-100 to-orange-900 ">
      <nav class="flex pl-5" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
              <a class="inline-flex items-center text-sm font-medium text-gray-800 hover:text-black dark:text-gray-400 dark:hover:text-white">
                <svg aria-hidden="true" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                <Link onClick={refreshPage} to='/'>Home</Link>
              </a>
            </li>
            <li>
              <div class="flex items-center">
                <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                <a class="ml-1 text-sm font-medium text-gray-800 hover:text-black md:ml-2 dark:text-gray-400 dark:hover:text-white"><Link onClick={refreshPage} to={`/${type}`}>{type}</Link></a>
              </div>
            </li>
            <li aria-current="page">
              <div class="flex items-center">
                <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                <span class="ml-1 text-sm font-medium text-gray-700 md:ml-2 dark:text-gray-400">{name.length > 25 ? name.substring(0, 25) + "..." : name}</span>
              </div>
            </li>
          </ol>
        </nav>
        <div className='flex justify-center items-center px-5'>
        <div className="relative mt-5 min-h-full flex w-full max-w-sm lg:max-w-5xl flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white bg-opacity-60 shadow-md lg:flex-row hover:shadow-xl duration-200">
          <div className='flex absolute z-10 w-full items-center gap-4 p-3 bg-white bg-opacity-50 backdrop-blur-lg'>
            <img onClick={goBack} className='h-7 border-[1.5px] border-gray-300 rounded-full p-1 hover:cursor-pointer' src={back} alt='back' />
            <p className=' font-[400] text-[0.9rem]'>{name.length > 30 ? name.substring(0, 30) + "..." : name}</p>
          </div>
          <a className="relative mt-3 flex justify-center w-full overflow-hidden">
            <img className={`object-contain hover:scale-110 duration-200 ${window.innerWidth >= 1024 ? 'w-35' : ''}`} src={url} alt="product image" />
          </a>
          <div className="mt-4 relative lg:pt-7">
            <a className='flex border-b-[1.5px] border-gray-200 pb-3 lg:hidden'>
              <h5 className="text-xl px-5 font-semibold tracking-tight text-slate-900">{name}</h5>
            </a>
            <div className=' pt-5 pl-3 pr-10 lg: pb-16'>
              <p className=' text-gray-600 text-[0.95rem]'>{info}</p>
            </div>
            <div className='w-full absolute bottom-0 right-0  flex px-3 pb-3 items-center justify-center'>
              <a onClick={purchase(singleProduct)} className="flex w-full items-center justify-between rounded-2xl bg-[#1C1C1E] px-5 py-3 text-center text-sm font-semibold text-white hover:bg-gray-700 duration-200 hover:cursor-pointer active:duration-75">
                <p>Add to cart</p>
                <span className=" font-semibold">{price} L</span>
              </a>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default fullCard