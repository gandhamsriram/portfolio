import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineHome, AiOutlineMail} from "react-icons/ai";
import {BsPerson, BsCodeSlash, BsSun, BsMoon} from "react-icons/bs";
import {CgFileDocument} from "react-icons/cg";
import {FaLaptopCode} from "react-icons/fa";


const Nav = () => {
    const [navbarblur, setnavbarblur]=useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    function scrollHandler() {
        if (window.scrollY >= 20) {
            setnavbarblur(true);
        } 
        else {
            setnavbarblur(false);
        }
    }

    var showMenu= ()=>{
        var bar=document.getElementsByClassName("bar");
        var ham=document.getElementsByClassName("NavbarLinks");
        bar[0].classList.toggle("barOne");
        bar[1].classList.toggle("barTwo");
        bar[2].classList.toggle("barThree");

        ham[0].classList.toggle("showNavbar");
    }

    var hideMenu = ()=>{
        var bar=document.getElementsByClassName("bar");
        var ham=document.getElementsByClassName("NavbarLinks");
        bar[0].classList.remove("barOne");
        bar[1].classList.remove("barTwo");
        bar[2].classList.remove("barThree");
        ham[0].classList.remove("showNavbar");
    }
    
    const handleContactClick = (e) => {
        e.preventDefault();
        hideMenu();
        const footer = document.querySelector('footer');
        if (footer) {
            footer.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    window.addEventListener("scroll", scrollHandler);

  return (
    <nav className={navbarblur? 'Navbar blur':'Navbar'}> 
 
        <h1 title='Reload' onClick={()=>window.location.reload(true)} className='Logo'>GSR</h1>

        <div className='Hamburger' onClick={showMenu}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
        </div>

        <ul className='NavbarLinks'>
            <li onClick={hideMenu}><Link to="/"><AiOutlineHome/> Home</Link></li>
            <li onClick={hideMenu}><Link to="/About"><BsPerson/> About</Link></li>
            <li onClick={hideMenu}><Link to="/About" state={{ scrollToSkills: true }}><FaLaptopCode/> Skills</Link></li>
            <li onClick={hideMenu}><Link to="/Project"><BsCodeSlash/> Projects</Link></li>
            <li onClick={hideMenu}><Link to="/Resume"><CgFileDocument/> Resume</Link></li>
            <li onClick={handleContactClick}><a href="#footer"><AiOutlineMail/> Contact</a></li>
            <li>
                <button onClick={toggleTheme} style={{background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '18px', display: 'flex', alignItems: 'center', padding: '8px', transition: 'var(--transition-smooth)'}} className="theme-toggle-btn">
                    {theme === 'light' ? <BsMoon /> : <BsSun />}
                </button>
            </li>
        </ul>
        
    </nav>
  )
}

export default Nav