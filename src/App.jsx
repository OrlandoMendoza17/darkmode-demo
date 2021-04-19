import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '@pages/Home';
import Login from '@pages/Login';
import Signin from '@pages/Signin';
import NotFound from '@pages/NotFound';
import {connect} from 'react-redux';
import {setCategoriesStore} from './store/actions';
import Player from '@components/containers/Player';

const App = ({dispatch, ...store}) =>{
  
  // const [categories, setCategories] = useState([])
  
  useEffect(() => {
    
    fetch('http://localhost:3000/initalState')
      .then(response => response.json())
      .then(data => {
        dispatch(setCategoriesStore(data))
      })
    
  }, [])

  // console.log(categories)
  
  return(
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home {...store} />
        </Route>
        <Route exact path='/Login' component={Login} />
        <Route exact path='/Signin' component={Signin} />
        <Route exact path="/Player/:id" component={Player} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

const mapStateToProps = ({search, myList, categories}) =>({
  search,
  myList,
  categories,
})

export default connect(mapStateToProps)(App);
