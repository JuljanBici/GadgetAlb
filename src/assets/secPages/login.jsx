import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/authContext'
import {GoogleButton} from 'react-google-button'

const login = () => {
  
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState('')
  const { signIn , googleSignIn } = UserAuth()
  const navigate = useNavigate()

  const login = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await signIn(email, password);
      navigate('/account')
    } catch(e) {
      setError(e.message)
      console.log(e.message)
    }
  }
  
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate('/account')
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div class="flex min-h-full flex-col justify-center bg-gradient-to-tl from-[#ede3da] to-orange-200 text-[#323232] px-6 py-20 lg:px-8 md:pb-[10rem]">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className='flex justify-center mt-4 items-center flex-row'>
          <p className=' font-bold text-3xl'>Log into AlbTech</p>
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
            <button onClick={login} type="submit" class="flex w-full justify-center rounded-xl bg-[#1C1C1E] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 outline-none">Log in</button>
          </div>
        </form>
        
        <div className=" mt-5 flex flex-row">
          <p className=' mr-7'>Or log in with ...</p>
          <button onClick={handleGoogleSignIn} type="submit" class="flex justify-center items-center rounded-xl bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 px-[6.4rem] py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 outline-none">Google</button>
        </div>

        <p class="mt-10 text-center text-sm">
          Not a member?
          <Link to='/signup'>
            <a href="" class="font-bold leading-6"> Create your account now</a>
          </Link>        
        </p>
      </div>
    </div>
  )
}

export default login