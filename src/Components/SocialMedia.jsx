import React from 'react'
import iconUp from '../assets/images/icon-up.svg'
import TypeIcon from './TypeIcon'

const SocialMedia = ({account, accountType, followers, newFollowers, increasement}) => {
  if(followers > 2000){
    followers = followers.toString().replace('000', 'k')
  }
  
  return (
    <div className={`SocialMedia ${accountType}`}>
      <div className="SocialMedia__title">
        <TypeIcon className="SocialMedia__title--type" accountType={accountType}/>
        <p className="SocialMedia__title--influencer-name">{account}</p>
      </div>
      <div className="SocialMedia__followers">
        <span className="SocialMedia__followers--count">{followers}</span>
        <span className="SocialMedia__followers--title">Followers</span>
      </div>
      <div className={`SocialMedia__rage ${increasement? 'success':'danger'}`}>
        <img className="SocialMedia__rage--icon" src={iconUp} alt="iconUp"/>
        <span className="SocialMedia__rage--count">{newFollowers} today</span>
      </div>
    </div>
  )
}

export default SocialMedia
