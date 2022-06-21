import './index.css'

const BookMenu = props => {
  const {activeReadingList, changeSelectedValue, selectedValue} = props
  const extraActiveClass = activeReadingList ? 'extra-active-class' : ''
  const {value, label} = selectedValue
  const changeSelectedValueBookMenu = () => {
    changeSelectedValue(value)
  }
  return (
    <li className="bookmenu-li">
      <button
        className={`change-selected-value-button ${extraActiveClass} `}
        onClick={changeSelectedValueBookMenu}
        type="button"
      >
        {label}
      </button>
    </li>
  )
}
export default BookMenu
