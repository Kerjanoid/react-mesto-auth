import {Link} from "react-router-dom"

function Header({buttonText, onHeaderButton, buttonClass, mailHandler}) {
  return (
    <header className="header">
      <Link className="header__logo" to="/" />
      <div className="header__menu">
        <p className="header__mail">{mailHandler}</p>
        <button className={`header__button ${buttonClass}`} type="button" onClick={onHeaderButton} aria-label={buttonText}>{buttonText}</button>
      </div>
    </header>
  )
}

export default Header
