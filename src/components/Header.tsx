import { Link } from "react-router";

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <a className="header__logo logo" href="/" />
        <img className="logo__image" src="" alt="" />
        <nav className="header__menu">
          <ul className="header__menu-list">
            <li className="header__menu-item">
              <Link className="header__menu-link" to="/">
                Home
              </Link>
            </li>
            <li className="header__menu-item">
              <Link className="header__menu-link" to="/recipe_gallary">
                Gallery
              </Link>
            </li>
            <li className="header__menu-item">
              <Link className="header__menu-link" to="/user">
                User
              </Link>
            </li>
            <li className="header__menu-item">
              <Link className="header__menu-link" to="/info">
                Info
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
