import React, {useEffect, useRef} from 'react'
import {saveDarkMode, getDarkMode} from '../utils/saveDarkmodeConfig';

const Darkmode = () => {
  const { body } = document
  const switchDarkMode = useRef(null);
  
  useEffect(()=>{
    const savedMode = getDarkMode()
    body.classList.add(savedMode)
    
    debugger
    
    if(savedMode === 'darkmode' || matchMedia('(prefers-color-scheme: dark)').matches){
      switchDarkMode.current.checked = true;
    }else{
      switchDarkMode.current.checked = false;
    }
  },[])
  
  
  const handleChange = () =>{
    if(switchDarkMode.current.checked){
      console.log('ola k ase?')
      body.classList.add('darkmode')    
      body.classList.remove('lightmode')
      saveDarkMode('darkmode')
    }else{
      body.classList.add('lightmode')    
      body.classList.remove('darkmode')
      saveDarkMode('lightmode')
    }
  }
  
  return (
    <div className="DarkMode">
      <span>Dark Mode</span>
      <input type="checkbox" onChange={handleChange} ref={switchDarkMode} id="darkmode"/>
      <label className="DarkMode__switch" htmlFor="darkmode">
        <div className="DarkMode__switch--toggle"></div>
      </label>
    </div>
  )
}

export default Darkmode
