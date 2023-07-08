import React from 'react'
import { Link } from 'react-router-dom'

export default function liked( {liked , removeLiked , cart , purchase} ) {

  function refreshPage() {
    this.setState({})
  }

  return (
    <div className='h-full my-20 mb-[17rem] lg:my-24 md:mb-[38rem] '>
      <div className=' font-bold text-3xl flex flex-col items-center h-full m-12' id={liked.length > 0 ? '' : "notLiked"}>
        <p>
          Produkte te Pelqyera
        </p>
        </div>
      <div id={liked.length > 0 ? 'notLiked' : ""} className=' font-bold text-3xl flex flex-col items-center h-full   '>
        <img className=' w-[300px]' src='https://cdni.iconscout.com/illustration/premium/thumb/error-404-4344461-3613889.png' />
        <p>There is no liked item yet :(</p>
      </div>
      <div className='grid grid-cols-1'>
        <div className="flex justify-center items-center">
          <div className='grid sm:grid-cols-1 px-16 gap-2 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4'>
            {liked.map((fav) => (
              <div key={fav.id} className="relative flex w-full min-h-full max-w-xs flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow hover:shadow-xl duration-200">
              <Link onClick={refreshPage} to={`/${fav.type}/${fav.id}`}>
                <a className="relative  mx-3 mt-3 flex h-50 overflow-hidden rounded-xl">
                  <img className="object-cover w-full hover:scale-110 duration-200" src={fav.url} alt="product image" />
                </a>
              </Link>
              <div className="mt-4 px-5 pb-5">
            <Link onClick={refreshPage} to={`/${fav.type}/${fav.id}`}>
              <a className='flex items-center pb-[5rem] justify-around'>
                <h5 className="text-xl font-semibold tracking-tight text-slate-900 w-[13rem]">{fav.name}</h5>
              </a>
            </Link>
            <div className='w-full absolute bottom-0 right-0  flex py-3 px-3 border-t-[1.5px] items-center justify-center'>
              <a onClick={() => removeLiked(fav.id)} className='flex flex-col items-start px-3 py-[.63rem] mr-2 rounded-2xl min-w-10 bg-[#ede3da]  hover:invert duration-150 cursor-pointer'>
                <img className='h-6 w-8' src='https://img.icons8.com/sf-black/2x/hearts.png'></img>
              </a>
              <a onClick={purchase(fav)} className="flex w-full items-center justify-between rounded-2xl bg-[#1C1C1E] px-5 py-3 text-center text-sm font-semibold text-white hover:bg-gray-700 duration-200 hover:cursor-pointer active:duration-75">
                <p>Add to cart</p>
                <span className=" font-semibold">{fav.price} L</span>
              </a>
            </div>
          </div>
            </div>
                )
            )}
          </div>
        </div>
      </div>
  </div>
  )
}

