import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-naviagtor">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
        Welcome to our online store, where shopping meets convenience and quality.
        At [Your E-commerce Website Name], we're dedicated to providing you with a seamless shopping experience,
        offering a wide range of products tailored to your needs. Whether you're searching for the latest fashion trends,
        tech gadgets, home essentials, or unique gifts, we've got you covered.
        </p>
        <p>
        An e-commerce website serves as a digital marketplace where buyers and sellers converge for transactions over the internet.
        Through these platforms, users can browse an extensive range.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
