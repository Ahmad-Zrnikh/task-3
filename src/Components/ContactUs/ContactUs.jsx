import Part from "../Featured/Part"
import "./ContactUs.css"

export default function ContactUs() {
  return (
    <div className="contact" id="contactUs">
<div className="textVideo">
    <div className="specialText">CONTACT US</div>
    <h1>Get In Touch</h1>
    <h1>With Our Agents</h1>
</div>
<div className="section2Contact">
  <div className="left">
<div className="map">

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12067.750401419004!2d-80.11164916150348!3d25.942983904154143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9acfee073549d%3A0xf4e74db7a5da487a!2z2LXZhtmKINii2YrZhNiyINio2YrYqti02Iwg2YHZhNmI2LHZitiv2KcgMzMxNjDYjCDYp9mE2YjZhNin2YrYp9iqINin2YTZhdiq2K3Yr9ip!5e0!3m2!1sar!2snl!4v1724134830036!5m2!1sar!2snl" width="650" height="520" style={{border: 0}} allowfullscreen loading="lazy" />
</div>

    <div className="phone">
    <div className="newpart"><Part src="/images/images/phone-icon.png" name="010-020-0340" des="Phone Number"  /></div>
    <div className="newpart"><Part src="/images/images/email-icon.png" name="info@villa.co" des="Business Email" /></div>
    </div>
  </div>

  <form className="inputs">
    
    <label htmlFor="fullname" v>Full Name</label> 
<input type="text" id="fullname" placeholder="Your Name..."/>
<label htmlFor="email">Email Address</label> 
<input type="text" id="email" placeholder="Your E-mail..."/>
<label htmlFor="subject">Subject</label> 
<input type="text" id="subject" placeholder="Subject..."/>
<label htmlFor="message">Message</label>
<textarea name="" id="message" cols="30" rows="10" placeholder="Your Message"></textarea>
<div className="btn new"><button className="btnCard">Send Message</button></div>
  </form>
</div>
    </div>
  )
}
