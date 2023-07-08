import React from 'react'

export default function Nav2() {
  return(
    <div className='w-full hidden bg-[#ede3da] items-center justify-around mt-16 h-20 xl:flex'>
      <div className='flex bg-[#f9f6f3] w-72 rounded-xl p-1 dark:bg-slate-800'>
      <img class="w-14 h-10 rounded-none px-3 pt-2" src="https://img.icons8.com/ios-filled/512/warranty.png" alt="cc"/>
        <div>
          <p className='text-[#323232] font-bold'>Produkte origjinale</p>
          <p className='text-[#323232] text-sm'>Cilesi e larte</p>
        </div>
      </div>
      <div className='flex bg-[#f9f6f3] w-72 rounded-xl p-1 dark:bg-slate-800'>
      <img class="w-14 h-10 rounded-none px-3 pt-2" src="https://img.icons8.com/ios-filled/512/credit-card-front.png" alt="cc"/>
        <div>
          <p className='text-[#323232] font-bold'>Porosit Online</p>
          <p className='text-[#323232] text-sm'>Mundesia e blerjes me karte</p>
        </div>
      </div>
      <div className='flex bg-[#f9f6f3] w-72 rounded-xl p-1 dark:bg-slate-800'>
      <img class="w-14 h-10 rounded-none px-3 py-1" src="https://img.icons8.com/ios-filled/512/doorbell.png" alt="cc"/>
        <div>
          <p className='text-[#323232] font-bold'>Blerje e shpejte</p>
          <p className='text-[#323232] text-sm'>Transaction vetem me nje click</p>
        </div>
      </div>
      <div className='flex bg-slate-100 w-72 rounded-xl p-1 dark:bg-slate-800'>
      <img class="w-14 h-10 rounded-none px-3 py-1" src="https://img.icons8.com/ios-filled/512/truck.png" alt="cc"/>
        <div>
          <p className='text-[#323232] font-bold'>Transport i shpejte</p>
          <p className='text-[#323232] text-sm'>Brenda dites</p>
        </div>
      </div>
    </div>
  )
}
