import React, {useState, useEffect} from 'react';
import styles from '../styles';
import { navLink } from '../utils';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Check if the user has scrolled down more than 50 pixels
      if (window.scrollY > 30) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup: Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarStyle = {
    backgroundColor: scrolling ? '#FFFFFF' : 'transparent',
    boxShadow: scrolling ? '0px 20px 100px -10px rgba(66, 71, 91, 0.1)' : 'none',
    transition: '0.3s ease-in-out',
  };

  return (
    <nav style={navbarStyle} className={`${styles.paddingX} py-4 w-full fixed top-0 sm:flex hidden justify-between items-center z-50`}>
      <div>
        <h1 className="font-montserrat text-[20px] font-[100] cursor-pointer">
          JAMIR + TIN
        </h1>
      </div>
      <div className="sm:block hidden">
        <ul className="flex gap-5 items-center ">
          {navLink.map((link, i) => (
            <li key={i} className="font-montserrat cursor-pointer hover:text-[#bba222]">
              {link.name}
            </li>
          ))}
        </ul>
      </div>
      
    </nav>
  )
}

export default Navbar