import React from 'react'
import img8 from './img/backimage.jpg'
export const Header = () => {
    return (
        <div>
              <header style={{ backgroundImage:`url(${img8})` }} className="masthead">
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in">Welcome To Our Hut Booking Website!</div>
        <div className="intro-heading text-uppercase">It's Nice To Meet You</div>
        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
      </div>
    </div>
  </header>
        </div>
    )
}
