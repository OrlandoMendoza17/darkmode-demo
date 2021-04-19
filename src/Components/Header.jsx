import React from 'react'
import Darkmode from './Darkmode'

const Header = () => {
  return (
    <header className="SocialMediaBoard-header">
      <div className="SocialMediaBoard-header__main">
        <h1 className="SocialMediaBoard-header__main--title">Social Media Dashboard</h1>
        <p className="SocialMediaBoard-header__main--followers">Total Followers: 23,004</p>
      </div>
      <hr/>
      <Darkmode/>
    </header>
  )
}

export default Header;