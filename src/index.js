import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './scss/App.scss';
import {getDarkMode} from './utils/saveDarkmodeConfig';
// import { Provider } from 'react-redux';
// import store from '@store'

ReactDOM.render(<App />, document.getElementById('app'));

// const darkmode = document.getElementById('darkmode')

// if(matchMedia('(prefers-color-scheme: dark)').matches){
//   darkmode.setAttribute('checked', true)
// }else{
//   // darkmode.setAttribute('checked', true)
// }

// darkmode.addEventListener('change', ()=>{
//   if(darkmode.checked){
//     document.body.classList.add('darkmode')    
//     document.body.classList.remove('lightmode')    
//   }else{
//     document.body.classList.add('lightmode')    
//     document.body.classList.remove('darkmode')    
//   }
// })