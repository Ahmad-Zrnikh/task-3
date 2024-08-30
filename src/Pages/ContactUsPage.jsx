import Part from "../Components/Featured/Part";
import Title from "../Components/Title/Title";
import "./ContactUsPage.css"
export default function ContactUsPage() {
  return (
    <div className="contactUsPage">
        <Title nameOfPage = "CONTACT US"/>
        <div className="contactUsForm">
          <div className="leftPart">
<div>
<div className="specialText">CONTACT US</div>
    <h1>Get In Touch</h1>
    <h1>With Our </h1>
    <h1>Agents</h1>
</div>
<p>when you really need to download free CSS templates, please remember our
  website TemplateMo. Also, tell your friends about our website. Thank you for visiting.
   There is a variety of Bootstrap HTML CSS templates on our website. If you need more information
   , please contact us.
</p>
<div className="phone new2">
    <div className="newpart"><Part src="/images/images/phone-icon.png" name="010-020-0340" des="Phone Number"  /></div>
    <div className="newpart"><Part src="/images/images/email-icon.png" name="info@villa.co" des="Business Email" /></div>
    </div>
          </div>


          <div className="rightPart">
          <form className="inputs new1">
    
    <label htmlFor="fullname" v>Full Name</label> 
<input type="text" id="fullname" placeholder="Your Name..."/>
<label htmlFor="email">Email Address</label> 
<input type="text" id="email" placeholder="Your E-mail..."/>
<label htmlFor="subject">Subject</label> 
<input type="text" id="subject" placeholder="Subject..."/>
<label htmlFor="message">Message</label>
<textarea name="" id="message" cols="30" rows="10" placeholder="Your Message"></textarea>
<div className="btn"><button className="btnCard">Send Message</button></div>
  </form>
          </div>
        </div>
<div className="map new2">

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12067.750401419004!2d-80.11164916150348!3d25.942983904154143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9acfee073549d%3A0xf4e74db7a5da487a!2z2LXZhtmKINii2YrZhNiyINio2YrYqti02Iwg2YHZhNmI2LHZitiv2KcgMzMxNjDYjCDYp9mE2YjZhNin2YrYp9iqINin2YTZhdiq2K3Yr9ip!5e0!3m2!1sar!2snl!4v1724134830036!5m2!1sar!2snl" width="650" height="520" style={{border: 0}} allowfullscreen loading="lazy" />
</div>
    </div>
  )
}
