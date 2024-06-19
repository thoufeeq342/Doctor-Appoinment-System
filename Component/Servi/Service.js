import React from 'react';
import { TbEmergencyBed } from "react-icons/tb";
import { LuMicroscope } from "react-icons/lu";
import { GiMedicines } from "react-icons/gi";
import { FaStethoscope } from "react-icons/fa6";
import { PiAmbulanceFill } from "react-icons/pi";
import { TbVaccine } from "react-icons/tb";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Service = () => {
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

      {/* service section */}
      <div className='container-fluid py-5'>
        <div className='container'>
          <div className='text-center mx-auto mb-5' style={{maxWidth:'500px'}}>
            <h5 className='d-inline-block text-primary text-uppercase border-bottom border-5'>Services</h5>
            <h1 className='display-4'>Excellent Hospital Services</h1>
          </div>
          <div className='row g-5'>
            <div className='col-lg-4 col-md-6'>
              <div className='service-item bg-light rounded d-flex flex-column align-items-center justify-contant-center text-center'>
                <div className='service-icon mb-4 mt-3'>
                <TbEmergencyBed className='text-white' style={{fontSize:'4rem'}}/>
                </div>
                <h4 className='mb-3'>Emergency</h4>
                <p className='m-0'>The child may be placed under observation to monitor vital signs and response to treatment The medical team will frequently reassess the child’s condition and adjust treatment as necessary.</p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='service-item bg-light rounded d-flex flex-column align-items-center justify-contant-center text-center'>
                <div className='service-icon mb-4 mt-3'>
                <LuMicroscope className='text-white' style={{fontSize:'4rem'}}/>
                </div>
                <h4 className='mb-3'>Blood Testing</h4>
                <p className='m-0'>Trained healthcare professionals who draw blood from patients Needles, syringes, vacuum tubes, and other blood collection devices Proper labeling of blood samples with patient and test requirements.</p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='service-item bg-light rounded d-flex flex-column align-items-center justify-contant-center text-center'>
                <div className='service-icon mb-4 mt-3'>
                <GiMedicines className='text-white' style={{fontSize:'4rem'}}/>
                </div>
                <h4 className='mb-3'>Medicine & Pharmacy</h4>
                <p className='m-0'> Access to various medical specialists for complex or specific health issues ensuring that medications are used safely and effectively to treat illnesses and manage health conditions.</p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='service-item bg-light rounded d-flex flex-column align-items-center justify-contant-center text-center'>
                <div className='service-icon mb-4 mt-3'>
                <FaStethoscope className='text-white' style={{fontSize:'4rem'}}/>
                </div>
                <h4 className='mb-3'>Doctors</h4>
                <p className='m-0'>Manage care in collaboration with other healthcare providers, including nurses, therapists, and social workers Refer to and collaborate with pediatric specialists for complex conditions</p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='service-item bg-light rounded d-flex flex-column align-items-center justify-contant-center text-center'>
                <div className='service-icon mb-4 mt-3'>
                <PiAmbulanceFill className='text-white' style={{fontSize:'4rem'}}/>
                </div>
                <h4 className='mb-3'>Ambulance</h4>
                <p className='m-0'>These are equipped with advanced medical equipment and staffed by paramedics or emergency medical technicians.They respond to 911 calls and other emergency situations.</p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='service-item bg-light rounded d-flex flex-column align-items-center justify-contant-center text-center'>
                <div className='service-icon mb-4 mt-3'>
                <TbVaccine className='text-white' style={{fontSize:'4rem'}}/>
                </div>
                <h4 className='mb-3'>Vaccine</h4>
                <p className='m-0'>Offering vaccines required for international travel, such as those for yellow fever, typhoid, or Japanese encephalitis.Conducting research on vaccines and participating in clinical trials.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of service section */}

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
export default Service;