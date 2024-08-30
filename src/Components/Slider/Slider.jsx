import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Slider.css"
import { faCircleChevronLeft, faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import {  useEffect, useRef, useState } from "react";
export default function Slider() {

    
const [counter, setCounter] = useState(0);
const slide1 = useRef();
const slide2 = useRef();
const slide3 = useRef();
const ball1 = useRef(null);
const ball2 = useRef(null);
const ball3 = useRef(null);
// const move = () => {
//     slide1.current.style.transform = `translateX(-${counter * 100}%)`;
//     slide2.current.style.transform = `translateX(-${counter * 100}%)`;
//     slide3.current.style.transform = `translateX(-${counter * 100}%)`;
// }
useEffect(() => {
    slide1.current.style.transform = `translateX(-${counter * 100}%)`;
    slide2.current.style.transform = `translateX(-${counter * 100}%)`;
    slide3.current.style.transform = `translateX(-${counter * 100}%)`;
    ball1.current.style.backgroundColor = "white";
    ball2.current.style.backgroundColor = "white";
    ball3.current.style.backgroundColor = "white";
    counter == 0 ? ball1.current.style.backgroundColor = "red" :
    counter == 1 ? ball2.current.style.backgroundColor = "red":
    ball3.current.style.backgroundColor = "red";
}, [counter])

// const updateBalls = () => {
//     ball1.current.style.backgroundColor = "white";
//     ball2.current.style.backgroundColor = "white";
//     ball3.current.style.backgroundColor = "white";
// }

// const activeballs = () => {
//     counter == 0 ? ball1.current.style.backgroundColor = "red" :
//     counter == 1 ? ball2.current.style.backgroundColor = "red":
//     ball3.current.style.backgroundColor = "red";
// }

    const gpprev = () => {
        if (counter === 0)
        setCounter(counter + 2);
        else
        setCounter(counter - 1);}
        // move();
        // updateBalls();
        // activeballs();    }


const goNext = () => {
    if(counter === 2)
    setCounter(counter * 0) ;
    else
    setCounter(counter + 1);}
    // move();
    // updateBalls();
    // activeballs();    }
    
  return (
    <div className="slider">

    <img src="./images/images/banner-01.jpg"  className="slide one"  ref={slide1}/>
    <img src="./images/images/banner-02.jpg"  className="slide two"  ref={slide2}/>
    <img src="./images/images/banner-03.jpg"  className="slide three"  ref={slide3}/>

<div className="arrows">
    <button onClick={gpprev}><FontAwesomeIcon  icon={faCircleChevronLeft} /></button>
     <button onClick={goNext}><FontAwesomeIcon icon={faCircleChevronRight} /></button>
</div>


<div className="textSlide">
    <div>Toronto, <span className="specialT">Canada</span></div>
    <h1>HURRY!</h1>
    <h1>GET THE</h1>
    <h1>BEST VILLA</h1>
    <h1>FOR YOU</h1>
</div>

<div className="balls">
<span  id="first" ref={ball1}></span>
<span id="second" ref={ball2}></span>
<span id="third" ref={ball3}></span>
</div>
    </div>
  )
}
