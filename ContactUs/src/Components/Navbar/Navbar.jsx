// import React from 'react'
// import "./Navbar.module.css"
import styles from './Navbar.module.css'
function Navbar() {
  console.log(styles);
  
  return (
   <>
   <nav className={`${styles.navigation} container`} >
    <div >
        <img src="/images/logo.png" alt="Navigation" />
    </div>
    <ul className="bar">
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
   </nav>
   </>
  )
}

export default Navbar
