import { useRef, useState } from "react";
import BestDeal from "../Components/BestDeal/BestDeal";
import Part from "../Components/Featured/Part";
import Title from "../Components/Title/Title";
import "./Details.css"

export default function Details() {
  const btnText =useRef(null);
  const [btnOfText, setbtnOfText] = useState(false);
  const buttonText = () =>{
    setbtnOfText(!btnOfText);
    btnOfText? btnText.current.style.transform = "Rotate(90deg)":
     btnText.current.style.transform = "Rotate(270deg)";
    
  }
  return (
    <div className="details">
        <Title nameOfPage = "SINGLE PROPERTY"/>
        <div className="secondPart">
            <div className="textDetails">
                <img src="/images1/property-01.jpg" alt="" />
                <button id="Btn">Appartment</button>
                <h2>24 New Street Miami, OR 24560</h2>
                <hr />
                <p>Get <span className="span1">the best villa agency</span> HTML, CSS Bootstrap Template for your company
                website. TemplateMo provides you the <span className="span2">best CSS templates </span>   
                in the world. Please tell your friends about it. Thank you. Cloud 
                bread kogi bitters pitchfork shoreditch tumbir yr succulents single-origin coffee schlitz
                enamel pin you probably haven't heard of them tgh hella.
                
                </p>
                <p>
                  when you look for free CSS templates, you can simply type TemplateMo in any search 
                  engine website. In addition, you can type TemplateMo Digital Marketing, 
                  TemplateMo Corporate Layouts, etc. Master cardigan hoodie pop-up.
                </p>
                <div className="content new">
                <button ref={btnText} onClick={buttonText}>&gt;</button>

    <p className="special">Best useful links ?</p>
    <hr />
    <p className="text-content ">
      Dolor <span className="span3">almesit amet</span>,consectetur adipisicing elit, sed doesn't eiusmod tempor kinfolk
      tonx seitan crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf same vice,
      chillwave vexillologist incididunt ut labore consectetur <span className="span4">adipiscing</span> elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.
      {btnOfText && <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
   necessitatibus illum. Iure iusto itaque,
   quaerat ut cumque distinctio omnis fugiat ipsa debitis voluptates alias laboriosam
    commodi, in obcaecati dicta inventore!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
   necessitatibus illum. Iure iusto itaque,
   quaerat ut cumque distinctio omnis fugiat ipsa debitis voluptates alias laboriosam
    commodi, in obcaecati dicta inventore!</p>}
    </p>
    <p className="special3">How does this work ?</p>
    <hr />
    <div className="special3">Why is Vila Agency the best ?</div>
</div>
            </div>

            <div className="section3-featured det">
    <Part src="/images/images/info-icon-01.png" name="450 m2" des="Total Flat Space" nameImage=""/>
    <hr />
    <Part src="/images/images/info-icon-02.png" name="Contract" des="Contract Ready" nameImage=""/>
    <hr />
    <Part src="/images/images/info-icon-03.png" name="Payment" des="Payment" nameImage="Process"/>
    <hr />
    <Part src="/images/images/info-icon-04.png" name="Safety" des="24/7 Under" nameImage="Control"/>
</div>
        </div>
 <BestDeal/>
 
    </div>
  )
}
