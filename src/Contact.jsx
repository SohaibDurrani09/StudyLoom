import { useState } from 'react';
import './Contact.css'
import mail from './assets/mail-icon.png'
import phone from './assets/phone-icon.png'
import location from './assets/location-icon.png'
import whitearrow from './assets/white-arrow.png';
import msg from './assets/msg-icon.png'
function Contact() {
  const [result, setResult] = useState();

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3eecaafb-6673-4096-bba6-0c6a89aae316");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg} alt="icon" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
         <li><img src={mail} alt="icon" />muhammadsohaib9998@gmail.com</li>
         <li><img src={phone} alt="icon" />+92-312-094-1683</li>
         <li><img src={location} alt="icon" />77 Massachusetts Ave, Cambridge MA 02139, United States</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label > Your Name</label>
            <input type="text" name='name' placeholder='Enter your Name' required />
            <label > Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required />
            <label > Your Email</label>
            <input type="email" name='email' placeholder='Enter your email id' required/>
            <label > Write your Message here </label>
            <textarea name="message"  rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='button dark-btn'>Submit <img src={whitearrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
