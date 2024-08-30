import { faCalendar } from "@fortawesome/free-regular-svg-icons"
import "./NavBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { useRef } from "react"
export default function NavBar() {
   const Home = useRef(null);
   const Prop = useRef(null);
   const details = useRef(null);
   const contact = useRef(null);
    const updateNav = () => {
      Home.current.style.color = "black";
      Prop.current.style.color = "black";
      details.current.style.color = "black";
      contact.current.style.color = "black";
    }

    const clickHome = () => {
      updateNav();
      Home.current.style.color = "red";
    };
    const clickProp = () => {
      updateNav();
      Prop.current.style.color = "red";
    };
    const clickDetails = () => {
      updateNav();
      details.current.style.color = "red";
    };
    const clickContact = () => {
      updateNav();
      contact.current.style.color = "red";
    };
    
  return (
    <div className="NavBar">
<div className="container2">
    <a href="#" className="title"><h2>VILLA</h2></a>
    <nav>
        <span className="burger-icon"   > 
            <span></span>
            <span></span>
            <span></span>
           <input type="checkbox" className="check"/>
        
           <ul >
        <li  onClick={clickHome}> <Link ref={Home} to="/">Home</Link></li>
           <li ref={Prop}> <Link to="/PropertiesPage">Properties</Link></li>
           <li ref={details}> <Link to="/Details">Property Details</Link></li>
           <li ref={contact}> <Link to="/ContactUsPage">Contact Us</Link></li>
             <li><a href="#" className="schedule"><div className="icon-scedule"><FontAwesomeIcon icon={faCalendar} /></div>Schedule a visit</a></li>  
             
        </ul>       
        </span>
        <ul >
        <li  onClick={clickHome}> <Link ref={Home} to="/" id="activelink">Home</Link></li>
           <li onClick={clickProp}> <Link ref={Prop} to="/PropertiesPage">Properties</Link></li>
           <li onClick={clickDetails}> <Link ref={details} to="/Details">Property Details</Link></li>
           <li onClick={clickContact}> <Link ref={contact} to="/ContactUsPage">Contact Us</Link></li>
             <li><a href="#" className="schedule"><div className="icon-scedule"><FontAwesomeIcon icon={faCalendar} /></div>Schedule a visit</a></li>  
             
        </ul>       
    </nav>
</div>

    </div>
  )
}
