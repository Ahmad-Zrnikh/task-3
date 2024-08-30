import BestDeal from "../Components/BestDeal/BestDeal";
import Cards from "../Components/Cards/Cards";
import ContactUs from "../Components/ContactUs/ContactUs";
import Featured from "../Components/Featured/Featured";
import Properties from "../Components/Properties/Properties";
import Slider from "../Components/Slider/Slider";
import Rectangular from "../Components/VideoView/Rectangular";
import VideoView from "../Components/VideoView/VideoView";
import"./Home.css"

export default function Home() {
  return (
    <div className="Home">
    <Slider/>
    <Featured/>
    <VideoView/>
    <div  className="rectangulars">
    <Rectangular number ="34" name1= "Buildings" name2 = "Finished Now"/>
    <Rectangular number ="12" name1= "Years" name2 = "Experience"/>
    <Rectangular number ="24" name1= "Awwards" name2 = "Won 2023"/>

     </div>
     <BestDeal/>
     <Properties/>
     <Cards/>
     <ContactUs/>
     </div>
  )
}
