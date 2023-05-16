import React from 'react'
import DarkMode from '../DarkMode'

const Navbar = ({darkMode, setDarkMode}) => {
  return (
    <div className="row">
      <div className="col">
        <h3>This is the Navbar component</h3>
      </div>
      <div className="col">
        <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  )
}

export default Navbar
