import React from 'react'

const error = () => {
  return (
    <div className=' bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700 h-full flex flex-col justify-center items-center'>
      <p className=' font-extrabold text-5xl mt-[168px] mb-16'>404 PAGE NOT FOUND</p>
      <p className=' font-semibold mb-28 text-xl'>We can't seem to find the page you're looking for!</p>
    </div>
  )
}

export default error