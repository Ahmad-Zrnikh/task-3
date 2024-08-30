import { useRef, useState } from "react"
import Card from "../Components/Cards/Card"
import Title from "../Components/Title/Title"
import "./PropertiesPage.css"
import Circles from "../Components/Circles/Circles"

export default function PropertiesPage() {
   
    const button1 = useRef(null);
    const button2 = useRef(null);
    const button3 = useRef(null);
    const button4 = useRef(null);
    const [ShowAll, setShowAll] = useState(true);
    const toggleShowAll = () => {
      setShowAll(!ShowAll);
      ShowAll == false?button1.current.style.backgroundColor = "red":
      button1.current.style.backgroundColor = "black";
    }
    
    
    const [Appartment, setAppartment] = useState(false);
    const toggleAppartment = () => {
      setAppartment(!Appartment);
    Appartment == false?button2.current.style.backgroundColor = "red":
    button2.current.style.backgroundColor = "black";
    }
    const [villa, setvilla] = useState(false);
    const togglevilla = () => {
      setvilla(!villa);
      villa == false?button3.current.style.backgroundColor = "red":
      button3.current.style.backgroundColor = "black";
    }
    const [Penthhouse, setPenthhouse] = useState(false);
    const togglePenthhouse = () => {
      setPenthhouse(!Penthhouse);
      Penthhouse == false?button4.current.style.backgroundColor = "red":
      button4.current.style.backgroundColor = "black";
    }

  return (
    <div className="propertiesPage">
        <Title nameOfPage = "PROPERTIES"/>
        <div className="buttonsProp">
        <button  onClick={toggleShowAll} ref={button1} id="colored">Show All</button>
        <button onClick={toggleAppartment} ref={button2}>Appartment</button>
        <button onClick={togglevilla} ref={button3}>Villa House</button>
        <button onClick={togglePenthhouse} ref={button4}>Penthhouse</button>
    </div>
        <div className="cards" id="Cards">
        {(ShowAll || villa) && <Card src= "/images/images/property-01.jpg" type = "Luxury Villa" price= "$2.264.000"
      title = "18 Old Street Miami, OR 97219"bedrooms= "8" bathrooms = "8" 
      area = "545m2" floor = "3" parking = "6 spots"/>}
     {(ShowAll || villa) &&<Card src= "/images/images/property-02.jpg" type = "Luxury Villa" price= "$1.180.000"
      title = "54 New Street Florida, OR 27001"bedrooms= "6" bathrooms = "5" 
      area = "450m2" floor = "3" parking = "8 spots"/>}
     {(ShowAll || villa) &&<Card src= "/images/images/property-03.jpg" type = "Luxury Villa" price= "$1.460.000"
      title = "26 Mid Street Portland, OR 38540"bedrooms= "5" bathrooms = "4" 
      area = "225m2" floor = "3" parking = "10 spots"/>}
     {(ShowAll || Appartment) && <Card src= "/images/images/property-04.jpg" type = "Appartment" price= "$584.500"
      title = "12 Hope Street Portland, OR 12650"bedrooms= "4" bathrooms = "3" 
      area = "125m2" floor = "25th" parking = "2 cars"/>}

     {(ShowAll || Penthhouse) && <Card src= "/images/images/property-05.jpg" type = "Penthouse" price= "$925.600"
      title = "34 Hope Street Portland, OR 42680" bedrooms= "4" bathrooms = "4" 
      area = "180m2" floor = "38th" parking = "2 cars"/>}
     {(ShowAll || Penthhouse) && <Card src= "/images/images/property-06.jpg" type = "Penthouse" price= "$450.000"
      title = "22 Hope Street Portland, OR 16540" bedrooms= "3" bathrooms = "2" 
      area = "165m2" floor = "26th" parking = "3 cars"/>}
       {(ShowAll || Appartment) &&<Card src= "/images/images/property-01.jpg" type = "Appartment" price= "$980.000"
      title = "14 Mid Street Miami, OR 36450"bedrooms= "8" bathrooms = "8" 
      area = "550m2" floor = "3" parking = "12 spots"/>}

{(ShowAll || Appartment) &&<Card src= "/images/images/property-02.jpg" type = "Appartment" price= "$1.520.000"
      title = "26 Old Street Miami, OR 12870" bedrooms= "12" bathrooms = "15" 
      area = "380m2" floor = "3" parking = "14 spots"/>}
     {(ShowAll || Appartment) && <Card src= "/images/images/property-03.jpg" type = "Appartment" price= "$3.145.000"
      title = "34 New Street Miami, OR 24650" bedrooms= "10" bathrooms = "12" 
      area = "860m2" floor = "3" parking = "10 spots"/>}
    </div>
    <Circles/>
    </div>
  )
}
