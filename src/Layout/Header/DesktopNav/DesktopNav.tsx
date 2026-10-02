import { NavLink } from "react-router";

export default function DesktopNav({navigation, closeMenu, isMenuOpen}){
    return (
        <nav
          id="primary-navigation"
          className={`site-nav ${isMenuOpen ? "site-nav--open" : ""}`}
          aria-label="Primary navigation"
        >
          {navigation.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                `site-nav__link${isActive ? " site-nav__link--active" : ""}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
    );
}