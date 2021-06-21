import {Link} from "react-router-dom"

function Header({buttonText, linkHandler, buttonClass, mailHandler}) {
  return (
    <header className="header">
      <Link className="header__logo" to="/" />
      <div className="header__menu">
        <p className="header__mail">{mailHandler}</p>
        <Link className={`header__button ${buttonClass}`} to={linkHandler} >{buttonText}</Link>
      </div>
    </header>
  )
}

export default Header
