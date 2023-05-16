import './styles.scss'
import MoonIcon from '../../../assets/images/moon-icon-retina.svg'
import SunIcon from '../../../assets/images/sun-icon-retina.svg'

const DarkMode = ({darkMode, setDarkMode}) => {

  const switchModes = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <button>
        <img
          className="mode-switch"
          onClick={switchModes}
          src={darkMode ? SunIcon : MoonIcon}
          alt="lightning-bolt"
          height="30px"
        />
      </button>
    </>
  )
}

export default DarkMode
