import React, { useState } from 'react'
import axios from 'axios'
import './contact.css'
import linkedin from '../../assets/linkedin-icon.png'
import github from '../../assets/github-icon.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'

function contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    alert('Query sent successfully!');
    try {
      await axios.post('https://portfolio-backend-my3n.onrender.com/api/v1/send-email', {
        name,
        email,
        message: `I am ${name}, email is ${email}, contact number is ${mobile}, my query is ${message}`
      });

      alert('Query Received Successfully!');
      setName('');
      setEmail('');
      setMobile('');
      setMessage('');
    } 
    catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    }
  };


  
  return (
    <div className='contact-container font-roboto' id='contact'>
      <div className='contact-left'>
        <p className='contact-left-heading'> Get In Touch</p>
        <br />
        <br />
        <div className='social-media-container'>
        <a href='https://www.linkedin.com/in/rohan-tiwari-966465202/' target='_blank' rel='noopener noreferrer'>
           <img src={linkedin} alt='LinkedIn' className='social-media-icon'/>
        </a>
        <a href='https://github.com/rohangit-hub' target='_blank' rel='noopener noreferrer'>
           <img src={github} alt='GitHub' className='social-media-icon'/>
        </a>
        <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
           <img src={instagram} alt='Instagram' className='social-media-icon'/>
        </a>
        <a href='https://x.com/rohan0804_/' target='_blank' rel='noopener noreferrer'>
           <img src={twitter} alt='Twitter' className='social-media-icon'/>
        </a>
        </div>
         <br />
          <p className='contact-left-text-content'>rohantiwari0325@gmail.com</p>
          <p className='contact-left-text-content'>+91 7052888223</p>
          <p className='contact-left-text-content'>Delhi, India</p>
      </div>

      <div className='contact-right'>
        <p className='contact-right-heading'>Send Me Your Query</p>
        <br />
        <form className='contact-right-form' onSubmit={handleSubmit}>
          <input 
            type='text' 
            placeholder='Full Name' 
            className='contact-right-input' 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            required 
          />
          
          <input 
            type='email' 
            placeholder='Email' 
            className='contact-right-input' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />

<input 
            type='text' 
            placeholder='Mobile Number' 
            className='contact-right-input' 
            value={mobile} 
            onChange={(e) => setMobile(e.target.value)} 
            required 
          />

          <textarea 
            placeholder='Message' 
            className='contact-right-textarea' 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required 
          />

          <button type='submit' className='contact-right-submit'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default contact