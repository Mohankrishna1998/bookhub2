import './index.css'
import {BsFillStarFill} from 'react-icons/bs'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import {Link} from 'react-router-dom'

const BooksItem = props => {
  const {everyBook, changeBooksDataList} = props
  const {
    authorName,
    coverPic,
    title,
    readStatus,
    rating,
    id,
    isWishlist,
  } = everyBook
  const changeWishlist = () => {
    changeBooksDataList(id)
  }
  const showWishlist = () =>
    isWishlist === true ? (
      <button
        onClick={changeWishlist}
        type="button"
        className="wishlist-button-bookshelves extra-wishlist-button-bookshelves"
      >
        <AiFillHeart className="icon-heart-red" />
        <p className="wishlist-button-bookshelves-content color-white">
          WISHLISTED
        </p>
      </button>
    ) : (
      <button
        onClick={changeWishlist}
        type="button"
        className="wishlist-button-bookshelves"
      >
        <AiOutlineHeart className="icon-heart" />
        <p className="wishlist-button-bookshelves-content">WISHLIST</p>
      </button>
    )

  return (
    <li className="li-booksitem-container">
      <Link className="link-class-books-item" to={`/books/${id}`}>
        <img
          src={coverPic}
          alt={title}
          className="li-booksitem-container-pic"
        />
      </Link>
      <div className="li-booksitem-container-desc">
        <h1 className="li-booksitem-container-desc-title">{title}</h1>
        <p className="li-booksitem-container-desc-author">{authorName}</p>
        <div className="booksitem-container-rating">
          <p className="booksitem-container-rating-heading">Avg Rating</p>
          <BsFillStarFill className="booksitem-container-rating-icon-star" />
          <p className="booksitem-container-rating-heading-rating">{rating}</p>
        </div>
        <div className="li-status-container">
          <p className="li-status-container-status-heading">Status : </p>
          <p className="li-status-container-status">{readStatus}</p>
        </div>
        {showWishlist()}
      </div>
    </li>
  )
}
export default BooksItem
