import React from 'react'

const BookContext = React.createContext({
  activeRoute: '',
  alterActiveRoute: () => {},
  hamburger: false,
  hamburgerDrop: () => {},
  wishListItem: [],
  addWishListItem: () => {},
})
export default BookContext
