import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { cardsData } from '../data/cardsData'

export default function prodSlider( {purchase, cart , liked , addLiked} ) {
   
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      arrows:false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 830,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          },
          breakpoint: 560,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    
    function refreshPage() {
      this.setState({})
    }

    return (
      <div className=' pt-14 bg-[#e7d9cd]'>
      <div className='flex flex-col text-[#323232] text-center'>
        <p className=' font-bold text-4xl mb-3'>ME TE PELQYERAT</p>
        <p className=' font-medium text-xl mb-10'>Produktet me IN te momentit rreth teknologjise</p>
      </div>
      <div className=' w-full pb-5 px-10'>
        <Slider {...settings}>
          {cardsData.map((phone) => (
          <div key={phone.id} className="relative flex w-full min-h-full max-w-xs flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow hover:shadow-xl duration-200">
          <Link onClick={refreshPage} to={`/${phone.type}/${phone.id}`}>
            <a className="relative  mx-3 mt-3 flex h-50 overflow-hidden rounded-xl">
              <img className="object-cover w-full hover:scale-110 duration-200" src={phone.url} alt="product image" />
            </a>
          </Link>
          <div className="mt-4 px-5 pb-5">
            <Link onClick={refreshPage} to={`/${phone.type}/${phone.id}`}>
              <a className='flex items-center pb-[5rem] justify-around'>
                <h5 className="text-xl font-semibold tracking-tight text-slate-900 w-[13rem]">{phone.name}</h5>
              </a>
            </Link>
            <div className='w-full absolute bottom-0 right-0  flex py-3 px-3 border-t-[1.5px] items-center justify-center'>
              <a onClick={addLiked(phone)} className='flex flex-col items-start px-3 py-[.63rem] mr-2 rounded-2xl min-w-10 bg-[#ede3da]  hover:invert duration-150 cursor-pointer'>
                <img className='h-6 w-8' src='https://img.icons8.com/sf-black/2x/hearts.png'></img>
              </a>
              <a onClick={purchase(phone)} className="flex w-full items-center justify-between rounded-2xl bg-[#1C1C1E] px-5 py-3 text-center text-sm font-semibold text-white hover:bg-gray-700 duration-200 hover:cursor-pointer active:duration-75">
                <p>Add to cart</p>
                <span className=" font-semibold">{phone.price} L</span>
              </a>
            </div>
          </div>
        </div>
          ))}
        </Slider>
      </div>
    </div>
    );
  }
