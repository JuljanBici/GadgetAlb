import React from 'react'
import Slider from '../mainPage/slider';
import Nav2 from '../mainPage/nav2';
import Cards from '../mainPage/cards';
import ProdSlider from '../mainPage/prodSlider';


const MainPage = ( {purchase, cart , liked , addLiked } ) => {

  return (
    <div className='bg-[#ede3da]'>
      <Nav2 />
      <Slider />
      <Cards purchase={purchase} cart={cart} liked={liked} addLiked={addLiked}/>
      <ProdSlider purchase={purchase} cart={cart} liked={liked} addLiked={addLiked}/>
    </div>
  )
}

export default MainPage