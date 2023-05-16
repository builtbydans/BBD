import React from 'react'
import '../Navbar/styles.scss'
import DarkMode from '../utils/DarkMode'
import BBDLogo from '../../assets/images/BBD.png';

const Navbar = ({darkMode, setDarkMode}) => {
  return (
    <div className="container">
      <div className="row mb-5 pt-4">
        <div className="col-6">
          <img className="bbd-logo" src={BBDLogo} alt="BBD-Logo"/>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
