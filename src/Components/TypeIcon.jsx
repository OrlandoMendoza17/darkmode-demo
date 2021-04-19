import React from 'react';
import facebookIcon from '../assets/images/icon-facebook.svg';
import instagramIcon from '../assets/images/icon-instagram.svg';
import twitterIcon from '../assets/images/icon-twitter.svg';
import youtubeIcon from '../assets/images/icon-youtube.svg';
import {facebook, instagram, twitter, youtube} from '../utils/socialMediaTypes'

const TypeIcon = ({accountType, className}) => {
  
  const type = {
    icon: '', socialMedia: ''
  }
  
  switch (accountType) {
    case facebook:
      type.icon = facebookIcon;
      type.socialMedia = facebook;
      break;

    case instagram:
      type.icon = instagramIcon;
      type.socialMedia = instagram;
      break;

    case twitter:
      type.icon = twitterIcon;
      type.socialMedia = twitter;
      break;

    case youtube:
      type.icon = youtubeIcon;
      type.socialMedia = youtube;
      break;
  }
  
  return <img className={className} src={type.icon} alt={`${type.socialMedia}-icon`}/>
}

export default TypeIcon;
