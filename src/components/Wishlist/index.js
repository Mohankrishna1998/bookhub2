/* eslint-disable no-restricted-syntax */
import './index.css'
import {Component} from 'react'
import BooksItem from '../BooksItem'
import Navbar from '../Navbar'
import Footer from '../Footer'
import BookContext from '../../Context/bookContext'

class Wishlist extends Component {
  state = {
    booksDataList: [],
  }

  changeBooksDataList = id => {
    const wishListItem = JSON.parse(localStorage.getItem('array'))
    const {booksDataList} = this.state
    console.log(booksDataList)

    const otherArray = []

    for (const k of wishListItem) {
      if (k.id === id) {
        let okObject = {}
        if (k.isWishlist === false) {
          okObject = {...k, isWishlist: true}
        } else {
          okObject = {...k, isWishlist: false}
        }
        otherArray.push(okObject)
      } else {
        otherArray.push(k)
      }
    }
    localStorage.setItem('array', JSON.stringify(otherArray))
    this.setState({
      booksDataList: [],
    })
  }

  showWishList = () => (
    <BookContext.Consumer>
      {value => {
        const {alterActiveRoute} = value
        const wishListItem = JSON.parse(localStorage.getItem('array'))
        const otherArray = []
        if (wishListItem !== null) {
          for (const i of wishListItem) {
            if (i.isWishlist === true) {
              otherArray.push(i)
            }
          }
        }

        const goToHome = () => {
          const {history} = this.props
          alterActiveRoute('home')
          history.push('/')
        }
        const getWishListItemEmpty = () => (
          <div className="wishlist-bg-container-empty">
            <h1 className="empty-heading-wishlist">YOUR WISHLIST IS EMPTY</h1>
            <img
              src="https://i.pinimg.com/736x/2e/95/1d/2e951def5f42f9a91c397a3ce60ba9b5--wireframe-ux.jpg"
              alt="wishlist"
              className="no-wishlist-pic"
            />
            <button
              type="button"
              onClick={goToHome}
              className="add-to-wishlist-button"
            >
              Add to Wishlist
            </button>
          </div>
        )
        const getWishListItem = () => (
          <div className="bg-main-wishlist-container">
            <h1 className="get-wishlist-item-heading">My Wishlist</h1>
            <div className="main-wishlist-container">
              {otherArray.map(i => (
                <BooksItem
                  key={i.id}
                  everyBook={i}
                  changeBooksDataList={this.changeBooksDataList}
                />
              ))}
            </div>
          </div>
        )

        return otherArray.length === 0
          ? getWishListItemEmpty()
          : getWishListItem()
      }}
    </BookContext.Consumer>
  )

  render() {
    localStorage.setItem('activeLink', 'wishlist')
    return (
      <>
        <Navbar />
        {this.showWishList()}
        <Footer />
      </>
    )
  }
}
export default Wishlist
