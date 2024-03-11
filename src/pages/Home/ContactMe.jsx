import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactMe() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_f0nthkv', 'template_xx904ir', form.current, {
        publicKey: 'P6UXbpbTcdk8L43Lv',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      
  };
    return (
      
      <section id="Contact" className="contact--section">
        <div>
          <h2 className="contact-heading">Contact Me</h2> <br></br>
          <p className="text-lg">Email: test@email.com</p>
          <p className="text-lg"> Phone number: +62 987654321</p>
          
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact--form--container">
          <div className="container">
            <label htmlFor="first-name" className="contact--label">
              <span className="text-md">First Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="first-name"
                id="first-name"
                required
              />
            </label>
            <label htmlFor="last-name" className="contact--label">
              <span className="text-md">Last Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="last-name"
                id="last-name"
                required
              />
            </label>
            <label htmlFor="email" className="contact--label">
              <span className="text-md">Email</span>
              <input
                type="email"
                className="contact--input text-md"
                name="email"
                id="email"
                required
              />
            </label>
            <label htmlFor="phone-number" className="contact--label">
              <span className="text-md">phone-number</span>
              <input
                type="number"
                className="contact--input text-md"
                name="phone-number"
                id="phone-number"
                required
              />
            </label>
          </div>
         
          <label htmlFor="message" className="contact--label">
            <span className="text-md">Message</span>
            <textarea
              className="contact--input text-md"
              id="message"
              rows="8"
              placeholder="Type your message..."
            />
          </label>
          <label htmlFor="checkbox" className="checkbox--label">
            <input type="checkbox" required name="checkbox" id="checkbox" />
            <span className="text-sm">I accept the terms</span>
          </label>
          <div>
          <input className="btn btn-primary contact--form--btn" type="submit" value="Submit" />
          </div>
        </form>
      </section>
    );
  }
  