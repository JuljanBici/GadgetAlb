import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/authContext'

const Signup = () => {
  
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState('')
  const { createUser } = UserAuth()
  const navigate = useNavigate()

  const signup = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await createUser(email, password);
      navigate('/account')
    } catch(e) {
      setError(e.message)
      console.log(e.message)
    }
  }

  return (
    <div class="flex min-h-full flex-col justify-center bg-gradient-to-tl from-[#ede3da] to-orange-200 text-[#323232] px-6 py-20 lg:px-8 md:pb-[10rem]">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className='flex justify-center mt-4 items-center flex-row'>
          <p className=' font-bold text-3xl'>SignUp to AlbTech</p>
        </div>
      </div>

      <div class="mt-7 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" >
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div class="mt-2">
              <input onChange={(e) => (setEmail(e.target.value))} type="email" placeholder='Enter your email' autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none"/>
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
            </div>
            <div class="mt-2">
              <input onChange={(e) => (setPassword(e.target.value))} type="password" placeholder='Enter your password' autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none"/>
            </div>
          </div>
          <div>
            <button onClick={signup} type="submit" class="flex w-full justify-center rounded-xl bg-[#1C1C1E] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 outline-none">Sign Up</button>
          </div>
        </form>
        <p class="mt-10 text-center text-sm">
          Already a member?
          <Link to='/login'>
            <a href="" class="font-bold leading-6"> Log in to your account now</a>
          </Link>        
        </p>
      </div>
    </div>
  )
}

export default Signup