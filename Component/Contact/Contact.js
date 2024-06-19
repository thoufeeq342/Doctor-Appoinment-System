import React from 'react';
import { IoMail } from 'react-icons/io5';
import { FaSquarePhone } from 'react-icons/fa6';
import { IoLocationSharp } from 'react-icons/io5';
import image from '../../Img Assets/contact.jpg';
import { FaAngleRight } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      {/* start navbar section */}
      <div className='container-fluid sticky-top bg-white shadow-sm'>
        <div className='conatiner'>
          <nav className='navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0'>
              <h1 className='m-2 text-uppercase text-primary'>Kitty Care</h1>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' onClick={() => document.getElementById('navbarNav').classList.toggle('show')}>
              <span className='navbar-toggler-icon '></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
              <div className='navbar-nav ms-auto py-0'>
                  <a href='/' className='nav-item nav-link active'>Home</a>
                  <a href='/about' className='nav-item nav-link'>About Us</a>
                  <a href='/service' className='nav-item nav-link'>Service</a>
                  <a href='/gallery' className='nav-item nav-link'>Gallery</a>
                  <a href='/contact' className='nav-item nav-link'>Contact</a>
              </div>
              <a className='btn btn-outline-primary rounded-pill my-2 my-sm-0' style={{fontSize:'1rem'}} href='/login'>Appointment</a>
            </div>
          </nav>
        </div>
      </div>
      {/* end navbar section */}

      {/* <!-- Contact Start --> */}
    <div className="container-fluid pt-5">
        <div className="container">
            <div className="text-center mx-auto mb-5" style={{maxWidth:'500px'}}>
                <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Any Questions?</h5>
                <h1 className="display-4">Please Feel Free To Contact Us</h1>
            </div>
            <div className="row g-5 mb-5">
                <div className="col-lg-4">
                    <div className="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center" style={{height:'200px'}}>
                        <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4" style={{width:'100px',height:'70px',transform:'rotate(-15deg)'}}>
                            <IoMail className="text-white" style={{transform:'rotate(15deg)',fontSize:'24px'}}/>
                        </div>
                        <h6 className="mb-0">Gandhi Road, Egmore, Chennai</h6>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center" style={{height:'200px'}}>
                        <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4" style={{width:'100px',height:'70px',transform:'rotate(-15deg)'}}>
                            <FaSquarePhone className="text-white" style={{transform:'rotate(15deg)',fontSize:'24px'}}/>
                        </div>
                        <h6 className="mb-0">+91 8489191342</h6>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center" style={{height:'200px'}}>
                        <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4" style={{width:'100px',height:'70px',transform:'rotate(-15deg)'}}>
                            <IoLocationSharp className="text-white" style={{transform:'rotate(15deg)',fontSize:'24px'}}/>
                        </div>
                        <h6 className="mb-0">kittycare@gmail.com</h6>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12" style={{height:'500px'}}>
                    <div className="position-relative h-100">
                       <img src={image} alt='img' className='position-relative w-100 h-100 p-2'/>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center position-relative" style={{marginTop:'-200px',zIndex:'1'}}>
                <div className="col-lg-8">
                    <div className="bg-white rounded p-5 m-5 mb-0">
                        <form>
                            <div className="row g-3">
                                <div className="col-12 col-sm-6">
                                    <input type="text" className="form-control bg-light border-0" placeholder="Your Name" style={{height:'55px'}}/>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input type="email" className="form-control bg-light border-0" placeholder="Your Email" style={{height:'55px'}}/>
                                </div>
                                <div className="col-12">
                                    <input type="text" className="form-control bg-light border-0" placeholder="Subject" style={{height:'55px'}}/>
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control bg-light border-0" rows="5" placeholder="Message"></textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Contact End --> */}

    {/* <!-- Footer Start --> */}
    <div className="container-fluid bg-dark text-light mt-5 py-5">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Get In Touch</h4>
                    <p className="mb-4">Offering multiple contact methods improves user experience and accessibility.</p>
                    <p className="mb-2"><FaMapMarkerAlt className='text-primary me-3'/>Gandhi Road,Egmore,Chennai</p>
                    <p className="mb-2"><IoMdMail className='text-primary me-3'/>kittycare@gmail.com</p>
                    <p className="mb-0"><FaPhone className='text-primary me-3'/>+91 8489191342</p>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Quick Links</h4>
                    <div className="d-flex flex-column justify-content-start">
                        <span className="text-light mb-2" href="#"><FaAngleRight className='me-2'/>Home</span>
                        <sapn className="text-light mb-2" href="#"><FaAngleRight className='me-2'/>About Us</sapn>
                        <span className="text-light mb-2" href="#"><FaAngleRight className='me-2'/>Services</span>
                        <span className="text-light mb-2" href="#"><FaAngleRight className='me-2'/>Gallery</span>
                        <span className="text-light mb-2" href="#"><FaAngleRight className='me-2'/>Contact</span>
                        <span className="text-light" href="#"><FaAngleRight className='me-2'/>Appointment</span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Branches</h4>
                    <div className="d-flex flex-column justify-content-start">
                        <span className="text-light mb-2" href="#"><FaAngleRight className='me-2'/>Chennai</span>
                        <span className="text-light mb-2" href="#"><FaAngleRight className='me-2'/>coimbatore</span>
                        <span className="text-light mb-2" href="#"><FaAngleRight className='me-2'/>Madurai</span>
                        <span className="text-light mb-2" href="#"><FaAngleRight className='me-2'/>Tirunelveli</span>
                        <span className="text-light mb-2" href="#"><FaAngleRight className='me-2'/>Kanyakumari</span>
                        <span className="text-light" href="#"><FaAngleRight className='me-2'/>Dindigul</span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Newsletter</h4>
                    <form action="">
                        <div className="input-group">
                            <input type="text" className="form-control p-3 border-0" placeholder="Your Email Address"/>
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <h6 className="text-primary text-uppercase mt-4 mb-3">Follow Us</h6>
                    <div className="d-flex">
                        <span className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="#"><FaTwitter/></span>
                        <span className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="#"><FaFacebookF/></span>
                        <span className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="#"><FaLinkedinIn/></span>
                        <span className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="#"><FaInstagram/></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid bg-dark text-light border-top border-secondary py-4">
        <div class="container">
            <div class="row g-5">
                <div class="col-md-6 text-center text-md-start">
                    <p class="mb-md-0">&copy;<span class="text-primary" href="#">kittycare</span>. All Rights Reserved.</p>
                </div>
                <div class="col-md-6 text-center text-md-end">
                    <p class="mb-0">Designed by <a class="text-primary" href="https://htmlcodex.com">React</a></p>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Footer End --> */}
    </div>
  )
}
export default Contact;