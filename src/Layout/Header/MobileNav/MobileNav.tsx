import { NavLink } from "react-router";

export default function MobileNav({ navigation, closeMenu, isMenuOpen, setIsMenuOpen }) {
  return (
    <>
    <button
      className={`site-header__menu-toggle site-header__mobile${isMenuOpen ? " site-header__mobile--open" : ""}`}
      type="button"
      aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={isMenuOpen}
      aria-controls="primary-navigation"
      onClick={() => setIsMenuOpen((open) => !open)}
    >
      {!isMenuOpen ? (
        <div
          className="site-header__mobile--menu-icon"
          data-framer-name="Menu Icon"
          data-highlight="true"
          tabIndex={0}
          style={{ transform: "none", transformOrigin: "50% 50% 0px" }}
        >
          <div
            className="site-header__mobile--menu-icon-line"
            data-framer-name="Rectangle"
            style={{
              backgroundColor:
                "var(--token-3d677c50-37d3-47c9-892c-10929a0ca602, rgb(250, 251, 252))",
              transform: "none",
              willChange: "transform",
              transformOrigin: "50% 50% 0px",
            }}
          ></div>
          <div
            className="site-header__mobile--menu-icon-line"
            data-framer-appear-id="r7ju5h"
            data-framer-name="Rectangle"
            style={{
              backgroundColor:
                "var(--token-3d677c50-37d3-47c9-892c-10929a0ca602, rgb(250, 251, 252))",
              willChange: "transform",
              opacity: "1",
              transform: "none",
              transformOrigin: "50% 50% 0px",
            }}
          ></div>
          <div
            className="site-header__mobile--menu-icon-line"
            data-framer-name="Rectangle"
            style={{
              backgroundColor:
                "var(--token-3d677c50-37d3-47c9-892c-10929a0ca602, rgb(250, 251, 252))",
              transform: "none",
              willChange: "transform",
              transformOrigin: "50% 50% 0px",
            }}
          ></div>
        </div>
      ) : (
        <div
          className="site-header__mobile--menu-icon"
          data-framer-name="Menu Icon"
          data-highlight="true"
          tabIndex={0}
          style={{ transform: "none", transformOrigin: "50% 50% 0px" }}
        >
          <div
            className="site-header__mobile--menu-icon-line"
            data-framer-name="Rectangle"
            style={{
              backgroundColor:
                "var(--token-3d677c50-37d3-47c9-892c-10929a0ca602, rgb(250, 251, 252))",
              transform: "rotate(45deg)",
              willChange: "transform",
              transformOrigin: "50% 50% 0px",
            }}
          ></div>
          <div
            className="site-header__mobile--menu-icon-line"
            data-framer-name="Rectangle"
            style={{
              backgroundColor:
                "var(--token-3d677c50-37d3-47c9-892c-10929a0ca602, rgb(250, 251, 252))",
              transform: "rotate(-45deg)",
              willChange: "transform",
              transformOrigin: "50% 50% 0px",
            }}
          ></div>
        </div>
      )}
    </button>
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
    </>
  );
}
