/* eslint-disable react-hooks/rules-of-hooks */
import {Component} from 'react'
import './App.css'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import BookDetails from './components/BookDetails'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Bookshelves from './components/BookShelves'
import BookContext from './Context/bookContext'
import NotFound from './components/NotFound'
import Wishlist from './components/Wishlist'

class App extends Component {
  state = {
    activeRoute: 'home',
  }

  alterActiveRoute = activeRouteValue => {
    this.setState(
      {
        activeRoute: activeRouteValue,
      },
      this.setTheLocalStorage,
    )
  }

  setTheLocalStorage = () => {
    const {activeRoute} = this.state
    localStorage.setItem('activeLink', activeRoute)
  }

  render() {
    const {activeRoute} = this.state
    return (
      <BookContext.Provider
        value={{
          activeRoute,
          alterActiveRoute: this.alterActiveRoute,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/shelf" component={Bookshelves} />
          <ProtectedRoute exact path="/books/:id" component={BookDetails} />
          <ProtectedRoute exact path="/wishlist" component={Wishlist} />
          <NotFound />
        </Switch>
      </BookContext.Provider>
    )
  }
}

export default App
