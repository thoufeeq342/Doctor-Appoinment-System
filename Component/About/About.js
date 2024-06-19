import React from 'react';
import img from '../../Img Assets/about.jpg';
import { FaUserDoctor } from "react-icons/fa6";
import { FaChildren } from "react-icons/fa6";
import { FaUserNurse } from "react-icons/fa";
import { FaSuitcaseMedical } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const About = () => {
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

      {/* start about section */}
      <div className='container-fluid py-5'>
        <div className='container'>
          <div className='row gx-5'>
            <div className='col-lg-5 mb-5 mb-lg-0' style={{minHeight:'500px'}}>
              <div className='pposition-relative h-100'>
                <img className='position-absolute rounded' src={img} alt='img' style={{objectFit:'cover',width:'500px',height:'520px'}}/>
              </div>
            </div>
            <div className='col-lg-7'>
              <div className='mb-4'>
                <h5 className='d-inline-block text-primary text-uppercase border-bottom border-5'>About Us</h5>
                <h1 className='display-4'>Best Kitty Care For Yourself and Your Children</h1>
              </div>
              <p>The environment in children's hospitals is often designed to be welcoming and comforting for young patients. This includes colorful decor, play areas, and activities to help reduce the stress and anxiety associated with hospital visits.Children's hospitals are equipped with advanced medical technology tailored to pediatric care. This includes specialized diagnostic equipment, minimally invasive surgical tools, and cutting-edge treatment options.</p>
              <div className='row g-3 pt-3'>
                <div className='col-sm-3 col-6'>
                  <div className='bg-light text-center rounded-circle py-4'>
                  <FaUserDoctor className='text-primary mb-3'style={{fontSize:'2.5rem'}}/>
                    <h6 className='mb-0'>Qualified<small className='d-block text-primary'>Doctors</small></h6>
                  </div>
                </div>
                <div className='col-sm-3 col-6'>
                  <div className='bg-light text-center rounded-circle py-4'>
                  <FaChildren className='text-primary mb-3' style={{fontSize:'2.5rem'}}/>
                    <h6 className='mb-0'>Children<small className='d-block text-primary'>Health Care</small></h6>
                  </div>
                </div>
                <div className='col-sm-3 col-6'>
                  <div className='bg-light text-center rounded-circle py-4'>
                  <FaUserNurse className='text-primary mb-3' style={{fontSize:'2.5rem'}}/>
                    <h6 className='mb-0'>Nurse<small className='d-block text-primary'>Helper</small></h6>
                  </div>
                </div>
                <div className='col-sm-3 col-6'>
                  <div className='bg-light text-center rounded-circle py-4'>
                  <FaSuitcaseMedical className='text-primary mb-3' style={{fontSize:'2.5rem'}}/>
                    <h6 className='mb-0'>Medical<small className='d-block text-primary'>Qualitity</small></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end about section */}

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
export default About;