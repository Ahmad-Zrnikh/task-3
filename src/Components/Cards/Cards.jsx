import Card from "./Card"
import "./Cards.css"

export default function Cards() {
  return (
    
    <div className="cards" >
             <Card src= "/images/images/property-01.jpg" type = "Luxury Villa" price= "$2.264.000"
      title = "12 New Street Miami, OR 12650"bedrooms= "8" bathrooms = "8" 
      area = "545m2" floor = "3" parking = "6 spots"/>
     <Card src= "/images/images/property-02.jpg" type = "Luxury Villa" price= "$1.180.000"
      title = "54 Mid Street Florida, OR 27001"bedrooms= "6" bathrooms = "5" 
      area = "450m2" floor = "3" parking = "8 spots"/>
     <Card src= "/images/images/property-03.jpg" type = "Luxury Villa" price= "$1.460.000"
      title = "26 Old Street Miami, OR 38540"bedrooms= "5" bathrooms = "4" 
      area = "225m2" floor = "3" parking = "10 spots"/>
     <Card src= "/images/images/property-04.jpg" type = "Appartment" price= "$584.500"
      title = "12 New Street Miami, OR 12650"bedrooms= "4" bathrooms = "3" 
      area = "125m2" floor = "25th" parking = "2 cars"/>

     <Card src= "/images/images/property-05.jpg" type = "Penthouse" price= "$925.600"
      title = "34 Beach Street Miami, OR 42680" bedrooms= "4" bathrooms = "4" 
      area = "180m2" floor = "38th" parking = "2 cars"/>
     <Card src= "/images/images/property-06.jpg" type = "Modren Condo" price= "$450.000"
      title = "22 New Street Portland, OR 16540" bedrooms= "3" bathrooms = "2" 
      area = "165m2" floor = "26th" parking = "3 cars"/>

    </div>
  )
}
