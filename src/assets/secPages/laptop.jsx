import React from 'react'
import { cardsData } from '../data/cardsData'
import { Link } from 'react-router-dom'
import imgLaptop from '/Users/User/Desktop/tailwind-project/src/stockPhotos/laptop.jpg'

export default function Laptop( {purchase, cart , liked , addLiked} ) {

  function refreshPage() {
    this.setState({})
  }


  return(
    <div className=' my-12'>
      <div className='flex flex-col text-center'>
        <img className=' object-cover w-full h-[390px] mb-10 ' src={imgLaptop} />
        <p className=' font-bold text-4xl mb-3'>Powerful, portable laptops for work and play</p>
        <p className=' font-medium text-2xl mb-14'>Get the best of productivity and portability with our sleek, high-performance laptops</p>
      </div>
      <div className='grid grid-cols-1'>
        <div className="flex justify-center items-center">
        <div className='grid items-center justify-center gap-6 sm:grid-cols-1 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4 xl:gap-6 '>
            {cardsData.map((prod) => {
              if (prod.type === "Laptop") {
                return (
              <div key={prod.id} className="relative min-h-full flex w-full max-w-xs flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-md hover:shadow-xl duration-200">
              <Link onClick={refreshPage} to={`/${prod.type}/${prod.id}`}>
                <a className="relative  mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
                  <img className="object-cover w-full hover:scale-110 duration-200" src={prod.url} alt="product image" />
                </a>
              </Link>
              <div className="mt-4 px-5 pb-5">
                <Link onClick={refreshPage} to={`/${prod.type}/${prod.id}`}>
                  <a className='flex items-center pb-[5rem] justify-around'>
                    <h5 className="text-xl font-semibold tracking-tight text-slate-900 w-[13rem]">{prod.name}</h5>
                  </a>
                </Link>
                <div className='w-full absolute bottom-0 right-0  flex py-3 px-3 border-t-[1.5px] items-center justify-center'>
                    <a onClick={addLiked(prod)} className='flex flex-col items-start px-3 py-[.63rem] mr-2 rounded-2xl min-w-10 bg-[#ede3da]  hover:invert duration-150 cursor-pointer'>
                      <img className='h-6 w-8 ' src='https://img.icons8.com/sf-black/2x/hearts.png'></img>
                    </a>
                  <a onClick={purchase(prod)} className="flex w-full items-center justify-between rounded-2xl bg-[#1C1C1E] px-5 py-3 text-center text-sm font-semibold text-white hover:bg-gray-700 duration-200 hover:cursor-pointer active:duration-75">
                    <p>Add to cart</p>
                    <span className=" font-semibold">{prod.price} L</span>
                  </a>
                </div>
              </div>
            </div>
                )
              } return null
            })}
          </div>
        </div>
      </div>
  </div>
  )
}