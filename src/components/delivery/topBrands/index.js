import React from 'react';
import './topBrands.css';
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import Slider from 'react-slick';

const topBrandsList = [
  {
    id: 1,
    time: "35 min",
    cover:
      "https://cdn.logojoy.com/wp-content/uploads/2018/05/01105934/1855-768x591.png",
  },
  {
    id: 2,
    time: "29 min",
    cover:
      "https://cdn.logojoy.com/wp-content/uploads/2018/05/01105827/881.png",
  },
  {
    id: 3,
    time: "38 min",
    cover:
      "https://cdn.logojoy.com/wp-content/uploads/20210512162319/Starbucks-Coffee-House-Logo.png",
  },
  {
    id: 4,
    time: "41 min",
    cover:
      "https://images-platform.99static.com//RdodgMiYUpRZJIG30PBW_HwJtpw=/94x190:864x960/fit-in/500x500/99designs-contests-attachments/96/96179/attachment_96179730",
  },
  {
    id: 5,
    time: "53 min",
    cover:
      "https://images-platform.99static.com/UCG39aSeMMPXyerLQWT0kmPODmU=/500x500/top/smart/99designs-contests-attachments/55/55390/attachment_55390865",
  },
  {
    id: 6,
    time: "23 min",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhUlWNjyMTgxcDjzUY_vZieMU0HgauvtLESHtcAHWUbCWAsrlxS2kF_3IlGE5gKmA_5pM&usqp=CAU",
  },
  {
    id: 7,
    time: "13 min",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtl0RsKCWOKWRyyKYjDXrUwtNJp8MvCbsGLACw-IO5fN-KdH6dZk3JTJ-QfqJ_V9cH4BU&usqp=CAU",
  },
  {
    id: 8,
    time: "43 min",
    cover:
      "https://thumbs.dreamstime.com/z/hot-kebab-design-logo-vector-fast-food-perfect-food-fast-food-cafe-restaurant-etc-n-hot-kebab-design-logo-vector-fast-food-194045831.jpg",
  },
];

const settings = {
  
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

const TopBrands = () => {
  return (
    <div className='top-brands max-width'>
      <div className='collection-title'>Top Brands for you</div>
      <Slider {...settings}>
        {topBrandsList.map((brand) => {
            return(
                <div>
                    <div className='top-brands-cover'>
                        <img src={brand.cover}
                            className='top-brands-image'
                            alt={brand.time}
                            /> 
                    </div>
                </div>
            )
        })}
      </Slider>
    </div>
  )
}

export default TopBrands
