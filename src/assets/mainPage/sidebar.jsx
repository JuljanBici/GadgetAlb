import React, { useEffect } from 'react'

export default function sidebar( {handleClick , isOpen , cart , remove , toggleAmount} ) {

  const [price, setPrice] = React.useState(0)

    function handlePrice() {
      let ans = 0 
      cart.map((item) => (
        ans += item.amount * item.price
      ))
      setPrice(ans)
    }
    useEffect(() => {
      handlePrice()
    })
  
  return (
    <>
      <div id={isOpen ? '' : 'active'}  className='flex flex-col z-50 fixed top-0 right-0 bottom-0 w-[70%] bg-gradient-to-br from-[#ceb39c] to-[#323232] text-white pb-28 shadow-lg shadow-gray-800 overflow-y-auto transition-[0.5s] md:w-[50%] lg:w-[30%]'>
        <button onClick={handleClick} className=' p-3 '>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/> </svg>
        </button>
        <div id={cart.length > 0 ? 'notAdded' : ""} className=' font-bold text-xl text-center flex flex-col h-20 m-12'>
          <img src='https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-4816550-4004141.png' />
          <p>No item added to the cart</p>
        </div>
        <div className=' px-3 text-black'>
        {cart.map((item , id) => (
            <div className="flex items-center bg-white bg-opacity-50 rounded-2xl mb-5 py-2 px-2">
            <img src={item.url} alt="Product" className="w-10 rounded-xl lg:w-20"/>
            <div className='w-full px-2'>
            <div className="flex-1 ml-4">
              <p className="font-bold text-xs lg:text-base">{item.name.length > 25 ? item.name.substring(0, 25) + "..." : item.name}</p>
            </div>
            <div className="flex justify-between items-center space-x-2 ml-3">
              <div className='flex items-center space-x-2'>
                <button onClick={() => toggleAmount(item, -1)} className="text-gray-600 font-bold mb-1 text-3xl">-</button>
                <span className="text-center ">{item.amount}</span>
                <button onClick={() => toggleAmount(item, +1)} className="text-gray-600 font-bold text-2xl">+</button>
                <button onClick={() => remove(item.id)} className="text-red-500 font-semibold">Remove</button>
              </div>
              <p className=" font-bold">{item.price} L</p>
            </div>
            </div>
          </div>
        ))}
        </div>
        <div className=' fixed bottom-0 w-[70%] text-black font-semibold bg-white bg-opacity-50 backdrop-blur-lg pt-3 md:w-[50%] lg:w-[30%]'>
          <div className=' flex flex-col  bottom-24'>
            <div className='flex justify-between px-7'>
              <p>Total :</p>
              <p>{price} L</p>
            </div>
          </div>
          <button className=' flex h-16 w-full items-center justify-center mt-5  bg-[#323232] text-white font-light text-xl '>
            Check Out
          </button>
        </div>
      </div> 
      <div id={isOpen ? 'activeBg' : ''} onClick={handleClick} className=' z-40 fixed top-0 right-0 w-full h-full invisible'></div>
    </>
  )
}