// import React from 'react';
// import ReactDOM from 'react-dom';
import './scss/App.scss';
// import App from './App';
// import { Provider } from 'react-redux';
// import store from '@store'

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>, 
//   document.getElementById('container')
// );

const darkmode = document.getElementById('darkmode')

if(matchMedia('(prefers-color-scheme: dark)').matches){
  darkmode.setAttribute('checked', true)
}else{
  // darkmode.setAttribute('checked', true)
}

darkmode.addEventListener('change', ()=>{
  if(darkmode.checked){
    document.body.classList.add('darkmode')    
  }else{
    document.body.classList.remove('darkmode')    
  }
})