import "./Header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faMap } from "@fortawesome/free-regular-svg-icons"

export default function Header() {
  return (
    <div className="header">
    <div className="container">
<div className="Info">
    <div className="email">
    <FontAwesomeIcon icon={faEnvelope}  className="icon1"/>
        <p>info@company.com</p>
        </div>
    <div className="line"></div>
    <div className="text">
    <FontAwesomeIcon icon={faMap} className="icon1" />
<p>Sunny Isles Beach, FL 33160</p>
    </div>
     </div>
<div className="icons">
   <div> <a href="#"><FontAwesomeIcon icon={faFacebook} className="icon2"/></a></div>
    <div><a href="#"><FontAwesomeIcon icon={faTwitter} className="icon2"/></a></div>
    <div><a href="#"><FontAwesomeIcon icon={faLinkedin} className="icon2"/></a></div>
    <div><a href="#"><FontAwesomeIcon icon={faInstagram} className="icon2"/></a></div>
</div>

     
    </div>
    </div>



  )
}
