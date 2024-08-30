import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Part from "../Featured/Part"
import "./BestDeal.css"
import { faCalendar } from "@fortawesome/free-regular-svg-icons"
import { useRef, useState } from "react"
export default function BestDeal() {
const firstbtn = useRef(null);
const secondbtn = useRef(null);
const thirdbtn = useRef(null);
const [first, setfirst] = useState(true);
const moveOne = () => {
setfirst(true);
setsecond(false);
setthird(false);
firstbtn.current.style.backgroundColor = "red";
secondbtn.current.style.backgroundColor = "black";
thirdbtn.current.style.backgroundColor = "black";
}

const [second, setsecond] = useState(false);
const moveTwo = () => {
    setfirst(false);
    setsecond(true);
    setthird(false);
    firstbtn.current.style.backgroundColor = "black";
    secondbtn.current.style.backgroundColor = "red";
    thirdbtn.current.style.backgroundColor = "black";
    }

const [third, setthird] = useState(false);
const moveThree = () => {
    setfirst(false);
    setsecond(false);
    setthird(true);
    firstbtn.current.style.backgroundColor = "black";
    secondbtn.current.style.backgroundColor = "black";
    thirdbtn.current.style.backgroundColor = "red";
    }

  return (
    <div className="bestDeal" id="Bestdeal">
        
<div className="firstRow">
    <div className="textDeal">
    <div className="specialText">BEST DEAL</div>
    <h1>Find Your Best</h1>
    <h1>Deal Right Now!</h1>
    </div>
    <div className="buttons">
        <button className="active4" ref={firstbtn} onClick={moveOne}>Appartment</button>
        <button ref={secondbtn} onClick={moveTwo}>Villa House</button>
        <button ref={thirdbtn} onClick={moveThree}>Penthhouse</button>
    </div>
</div>

{first &&<div className="secondRow">
<div className="section3-featured new">
    <div><h1>185m2</h1>
    <p>Total Flat Space</p>
    </div>
    <hr />
    <div><h1>26th</h1>
    <p>Floor number</p>
    </div>   
     <hr />
     <div><h1>4</h1>
    <p>Number of rooms</p>
    </div>
        <hr />
        <div><h1>Yes</h1>
    <p>Parking Available</p>
    </div>
        <hr />
        <div><h1>Bank</h1>
    <p>Payment Process</p>
    </div>
    </div>
    <div className="imageDeal">
        <img src="/images/images/deal-01.jpg" alt="" />
    </div>
    <div className="text2Deal">
        <h4>Extra Info About Property</h4>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.do elusmod tempor
             pack incididunt labore et dolore magna aliqua
            quised ipsum suspendisse
             </p>
             <p>
                When you need free CSS templates,you can simply type TemplateMo
                 in any search engine website .
                In addition , you can type TemplateMo portfolio, TemplateMo One page Layouts,etc. 
             </p>
             <a href="#" className="schedule deal"><div className="icon-scedule"><FontAwesomeIcon icon={faCalendar} /></div>Schedule a visit</a>

    </div>
    
</div>}


{second &&<div className="secondRow">
<div className="section3-featured new">
    <div><h1>250m2</h1>
    <p>Total Flat Space</p>
    </div>
    <hr />
    <div><h1>26th</h1>
    <p>Floor number</p>
    </div>   
     <hr />
     <div><h1>5</h1>
    <p>Number of rooms</p>
    </div>
        <hr />
        <div><h1>Yes</h1>
    <p>Parking Available</p>
    </div>
        <hr />
        <div><h1>Bank</h1>
    <p>Payment Process</p>
    </div>
    </div>
    <div className="imageDeal">
        <img src="/images1/deal-02.jpg" alt="" />
    </div>
    <div className="text2Deal">
        <h4>Detail info About Villa</h4>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.do elusmod tempor
             pack incididunt labore et dolore magna aliqua
            quised ipsum suspendisse
             </p>
             <p>
                When you need free CSS templates,you can simply type TemplateMo
                 in any search engine website .
                In addition , you can type TemplateMo portfolio, TemplateMo One page Layouts,etc. 
             </p>
             <a href="#" className="schedule deal"><div className="icon-scedule"><FontAwesomeIcon icon={faCalendar} /></div>Schedule a visit</a>

    </div>
    
</div>}

{third &&<div className="secondRow">
<div className="section3-featured new">
    <div><h1>320m2</h1>
    <p>Total Flat Space</p>
    </div>
    <hr />
    <div><h1>34th</h1>
    <p>Floor number</p>
    </div>   
     <hr />
     <div><h1>6</h1>
    <p>Number of rooms</p>
    </div>
        <hr />
        <div><h1>Yes</h1>
    <p>Parking Available</p>
    </div>
        <hr />
        <div><h1>Bank</h1>
    <p>Payment Process</p>
    </div>
    </div>
    <div className="imageDeal">
        <img src="/images1/deal-03.jpg" alt="" />
    </div>
    <div className="text2Deal">
        <h4>Extra Info About Penthhouse</h4>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.do elusmod tempor
             pack incididunt labore et dolore magna aliqua
            quised ipsum suspendisse
             </p>
             <p>
                When you need free CSS templates,you can simply type TemplateMo
                 in any search engine website .
                In addition , you can type TemplateMo portfolio, TemplateMo One page Layouts,etc. 
             </p>
             <a href="#" className="schedule deal"><div className="icon-scedule"><FontAwesomeIcon icon={faCalendar} /></div>Schedule a visit</a>

    </div>
    
</div>}


    </div>
  )
}
