import React , {useState} from "react";
import { NavLink, Link } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";

function Header() {
  const [menuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev)=>!prev);
  };

  return (
    <div className="toolbar">
      <div className="row auto-clear nav_container ">
        <div className="col-md-4 col-xs-12 clearfix">
          <Link to="/" className="brunch">
            BRUNCH
          </Link>
        </div>
        <div
        className={ `nav_Items${
          menuOpen
            ? " mobileView "
            : ""
        } `}
      >
        <div className="nav_Items" >
         
          <NavLink to="/menu" className='nav_item '>
            MENU
          </NavLink>
          <NavLink to="/events" className='nav_item '>
            EVENTS
          </NavLink>
          <NavLink to="/contact" className='nav_item '>
            CONTACT
          </NavLink>
          <NavLink to="/login" className='nav_item '>
           LOGIN
          </NavLink>
          <NavLink to="/signup" className='nav_item '>
            SIGNUP
          </NavLink>
        
          </div>
        </div>
        <div className='menuBar'>
        <HiMenuAlt1
          size={"2rem"}
          onClick={toggleMenu}
          className='z-1000'
        />
      </div>
      </div>
    </div>
  );
}

export default Header;
