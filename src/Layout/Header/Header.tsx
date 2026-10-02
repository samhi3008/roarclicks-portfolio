import { NavLink } from "react-router";
import { useState } from "react";
import "./Header.css";
import logo from "../../assets/white-png.png";
import MobileNav from "./MobileNav/MobileNav";
import DesktopNav from "./DesktopNav/DesktopNav";
import { useMediaQuery } from "../../Hooks/useMediaQuery";

const navigation = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink
          to="/"
          className="site-logo"
          onClick={closeMenu}
          aria-label="Portfolio home"
        >
          {/* <span className="site-logo__mark">P</span> */}
          <img
            className="site-logo__mark"
            src={logo}
            alt="Roarclicks Photography"
          />
          <span>Roarclicks Photography</span>
        </NavLink>

        {isMobile ? (
          <MobileNav
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            navigation={navigation}
            closeMenu={closeMenu}
          />
        ) : (
          <DesktopNav
            isMenuOpen={isMenuOpen}
            closeMenu={closeMenu}
            navigation={navigation}
          />
        )}
      </div>
    </header>
  );
}
