import React, { useEffect } from 'react'
import {Routes, Route } from 'react-router-dom';
import Navbar from './assets/mainPage/navbar1';
import Sidebar from './assets/mainPage/sidebar';
import MainPage from './assets/mainPage/mainPage';
import Sherbimet from './assets/secPages/sherbimet';
import RrethNesh from './assets/secPages/rrethNesh';
import Login from './assets/secPages/login';
import Signup from './assets/secPages/signup';
import Account from './assets/secPages/account';
import Liked from './assets/secPages/liked';
import FullCard from './assets/secPages/fullCard';
import Smartphone from './assets/secPages/smartphone';
import Laptop from './assets/secPages/laptop';
import Accesories from './assets/secPages/accesories';
import Console from './assets/secPages/console';
import Gaming from './assets/secPages/gaming';
import Error from './assets/secPages/error';
import Footer from './assets/mainPage/footer';
import { AuthContextProvider } from './context/authContext';
import ProtectedRoute from './assets/secPages/protectedRoute'

export default function App() {

  const [isOpen, setIsOpen] = React.useState(false)

  function ToggleSidebar() {
    setIsOpen(!isOpen)
  }

  const [warning, setWarning] = React.useState(false)

  const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')

  const [cart, setCart] = React.useState(cartFromLocalStorage)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  },[cart])


  const purchase = (item) => () => {
    let isPresent = false
    cart.forEach((product) => {
      if (item.id === product.id)
      isPresent = true
    })
    if (isPresent) {
      setWarning(true);
      
      setTimeout(() => {
        setWarning(false);
      }, 2000)
      return;
    }
    setCart([...cart, item])
  }
  const turnBack = (id) => {
    const newArray = cart.filter( carts => carts.id !== id)
    setCart(newArray)
  }
  
  const toggleAmount = (item, d) => {
    let ind = -1
    cart.forEach((data, index) => {
      if (data.id === item.id)
        ind = index
    })
    const tempArr = cart
    tempArr[ind].amount += d
    if (tempArr[ind].amount === 0)
      tempArr[ind].amount = 1
    setCart([...tempArr])
  }

  const likedFromLocalStorage = JSON.parse(localStorage.getItem('liked') || '[]')

  const [liked, setLiked] = React.useState(likedFromLocalStorage)

  useEffect(() => {
    localStorage.setItem('liked', JSON.stringify(liked))
  },[liked])


  const addLiked = (item) => () => {
    let isPresent = false
    liked.forEach((product) => {
      if (item.id === product.id)
      isPresent = true
    })
    if (isPresent) {
      return;
    }
    setLiked([...liked, item])
    }
  
  const removeLiked = (id) => {
    const newArray = liked.filter( carts => carts.id !== id)
    setLiked(newArray)
  }

  return(
      <div>
        <AuthContextProvider>
          <Navbar handleClick={ToggleSidebar} cart={cart}/>
          <Sidebar 
            handleClick={ToggleSidebar}
            isOpen={isOpen}
            cart={cart}
            remove={turnBack}
            toggleAmount={toggleAmount}
          />
          {
            warning && <div className=' z-50 fixed right-10 top-20 '>
              <div class="flex items-center bg-blue-500 text-white text-sm rounded-lg font-bold px-4 py-3 shadow-md" role="alert">
                <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
                <p>This item is already added to the cart.</p>
              </div>
            </div>
          }
          <Routes>
            <Route path="/GadgetAlb" element={<MainPage purchase={purchase} cart={cart} liked={liked} addLiked={addLiked} />} />
            <Route path="/GadgetAlb/sherbimet" element={<Sherbimet />} />
            <Route path="/GadgetAlb/contactUs" element={<RrethNesh />} />
            <Route path="/GadgetAlb/login" element={<Login />} />
            <Route path="/GadgetAlb/signup" element={<Signup />} />
            <Route path="/GadgetAlb/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
            <Route path="/GadgetAlb/liked" element={<Liked removeLiked={removeLiked} cart={cart} liked={liked} purchase={purchase} />} />
            <Route path="/GadgetAlb/Smartphone" element={<Smartphone purchase={purchase} cart={cart} liked={liked} addLiked={addLiked} />} />
            <Route path="/GadgetAlb/Laptop" element={<Laptop purchase={purchase} cart={cart} liked={liked} addLiked={addLiked} />} />
            <Route path="/GadgetAlb/Console" element={<Console purchase={purchase} cart={cart} liked={liked} addLiked={addLiked} />} />
            <Route path="/GadgetAlb/Accesories" element={<Accesories purchase={purchase} cart={cart} liked={liked} addLiked={addLiked} />} />
            <Route path="/GadgetAlb/Gaming" element={<Gaming purchase={purchase} cart={cart} liked={liked} addLiked={addLiked} />} />
            <Route path="/GadgetAlb/:productType/:productId" element={<FullCard purchase={purchase} cart={cart}/>} />
            <Route path="*" element={<Error/>} />
          </Routes>
          <Footer />
        </AuthContextProvider>
      </div>
     )
} 
