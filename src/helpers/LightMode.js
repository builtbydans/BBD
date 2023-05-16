import { useState } from 'react';
import { Container, Nav, NavbarBrand } from 'react-bootstrap'
import MoonIcon from '../assets/images/moon-icon-retina.svg'
import SunIcon from '../assets/images/sun-icon-retina.svg'
import BBDLogo from '../assets/images/BBD.png';

const LightMode = () => {

  const [lightMode, setLightMode] = useState(false);
  const [imageSrc, setImageSrc] = useState(SunIcon);

  const switchModes = () => {
    setLightMode(prevMode => !prevMode);
    lightMode ? setImageSrc(SunIcon) : setImageSrc(MoonIcon);
  };

  return (
    <div className={lightMode ? "light-mode" : "dark-mode"}>
      <img
        className=""
        onClick={switchModes}
        src={imageSrc}
        alt="lightning-bolt"
        height="30px"
      />
    </div>
  )
}

export default LightMode;
