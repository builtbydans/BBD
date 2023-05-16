import React from "react"
import Typical from "react-typical"
import '../Hero/styles.scss';

const Hero = () => {
  return (
    <div className="container">
        <div className="typical">
            <Typical
            className="typical-title"
            wrapper="h1"
            steps={["Software developer and web designer "]}
        />
        </div>
        <hr/>
    </div>
  )
}

export default Hero
