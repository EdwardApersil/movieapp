import React, {useRef} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'

function Nav() {
    const navRef = useRef()
    const handleClick = () => {
        navRef.current.classList.toggle('navLinks')
    }

    // const style = {
    //     backgroundColor: 'transparent',
    //     borderRadius: '5px',
    //     padding: '5px',
    //     textAlign: 'center',
    //     borderBottom: '15px'
    // }

    const btn = {
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        marginLeft: '9.5rem',
        width: '90px',
        marginBottom: '10px',
    }
    return (
    <>
        <div className='navBar'>
                <div className="logo">
                <h3>WatchFlix</h3>
                <div className="burger" onClick={handleClick}>
                    <GiHamburgerMenu />
                </div>
            </div>
            <div className="menus" ref={navRef}>
                <ul >
                    <a href="/">Home</a>
                    <a href="/">Movies</a>
                    <a href="/">Series</a>
                    <a href="/">Way to Watch</a>
                    <a href="/">MyList</a>
                    <a href="/">New Movies</a>
                    <button style={btn}>Sign In</button>
                </ul> 
            </div>
                    
            {/* <div>
                <button>Sign In</button>
            </div> */}
        </div>
    </>
  )
}

export default Nav