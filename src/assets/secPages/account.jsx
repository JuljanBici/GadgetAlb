import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/authContext'

const account = () => {

  const navigate = useNavigate()

  const { user, logout } = UserAuth()

  const handleLogOut = async (e) => {
    try {
      await logout()
      navigate('/login')
    } catch (e) {
      console.log(e.message)
    }
  }
  
  return (
    <div className='px-6 pt-[100px] text-lg h-full text-[#323232] my-24 lg:my-[4rem] md:mb-[31rem]'>
      <div className=' font-extrabold text-4xl'>
        My Account
      </div>
      <div className=' pt-10'>
        <p>Pershendetje <span className=' font-bold'>{user && user.email}</span> ! </p>
        <p className=' font-semibold text-xl'> Mireseerdhe ne AlbTech</p>
      </div>

      <div className=' py-16'>
        <p>
          Nuk jeni <span className=' font-bold'>{user && user.email} </span>?
        </p>
        <button onClick={handleLogOut} className=' mt-3 bg-[#1C1C1E] hover:bg-gray-700 text-white rounded-xl px-5 py-2 font-extrabold'>
          Log out
        </button>
      </div>
    </div>
  )
}

export default account