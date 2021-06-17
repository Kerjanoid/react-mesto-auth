import {Link} from "react-router-dom"

function Header() {
  return (
  <header className="header">
    <Link className="header__logo" to="/mesto-react" />
  </header>
  )
}

export default Header
