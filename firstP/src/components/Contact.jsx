import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <>
     <main>   
    <section class="contact">
            <h1>Contact Us</h1>
            <p>We'd love to hear from you! Reach out to us using the form below or visit us at our nursery.</p>
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required/>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required/>
                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="6" required></textarea>
                <button type="submit" className='send-msg-btn'>Send Message</button>
            </form>
            <p>Address: Vrindavan Vihar Nursery, Green Lane, Cityville</p>
            <p>Phone: +1 234 567 890</p>
            </section>
        </main>
    </>
  )
}

export default Contact