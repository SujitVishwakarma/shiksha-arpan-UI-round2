import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1><span style={{color: 'blue', fontWeight: 600, fontSize: '40px'}}>शिक्षा</span> <span style={{color: 'red', fontWeight: 600, fontSize: '40px'}}>अर्पण</span></h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p>Become lifelong learners with India's best teachers, engaging video lessons and personalised learning journeys.</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                23, Sankarpur, Cuttack , Odisha- 10
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +91 2222222222
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                sujitv257@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2023 All rights reserved | This template is made with <i className='fa fa-heart'></i> by Sujit Vishwakarma.
        </p>
      </div>
    </>
  )
}

export default Footer
