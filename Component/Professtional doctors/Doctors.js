import React from 'react';
import './Doctors.css';
import img1 from '../../Img Assets/doctor1.jpg';
import img2 from '../../Img Assets/doctor3.jpg';
import img3 from '../../Img Assets/doctor2.avif';
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

const Doctors = () => {
  return (
    <div>
      {/* professtional doctors section */}
      <div className='container-fluid py-5'>
        <div className='container'>
          <div className='text-center mx-auto mb-5' style={{maxWidth:'500px'}}>
            <h1 className='display-4'>Professtional Doctors</h1>
          </div>
          <div className='owl-carousel team-carousel position-relative'>
            <div className='team-item'>
              <div className='row g-0 bg-light rounded overflow-hidden'>
                <div className='col-12 col-sm-5 h-100'>
                  <img className='img-fluid h-100' src={img1} alt='img'style={{objectFit:'cover'}}/>
                </div>
                <div className='col-12 col-sm-7 h-100 d-flex flex-column'>
                  <div className='mt-auto p-4'>
                    <h3>Jhon</h3>
                    <h6 className='fw-normal fst-italic text-primary mb-4'>Fever & Cold</h6>
                    <p className='m-0'>Conduct thorough patient evaluations, including medical history, physical examinations, and blood tests. Interpret results from laboratory tests, imaging studies, and other procedures.</p>
                  </div>
                  <div className='d-flex mt-auto p-4'>
                    <span className='btn btn-lg btn-primary btn-lg-square rounded-circle me-3'><FaFacebookF className='fab fa-facebook-f'/></span>
                    <span className='btn btn-lg btn-primary btn-lg-square rounded-circle me-3'><FaTwitter className='fab fa-twitter'/></span>
                    <span className='btn btn-lg btn-primary btn-lg-square rounded-circle'><FaLinkedinIn className='fab fa-linked-in'/></span>
                  </div>
                </div>
              </div>
            </div>
            <div className='team-item border-top'>
              <div className='row g-0 bg-light rounded overflow-hidden'>
                <div className='col-12 col-sm-5 h-100'>
                  <img className='img-fluid h-100'src={img2} alt='img' style={{objectFit:'cover'}}/>
                </div>
                <div className='col-12 col-sm-7 h-100 d-flex flex-column'>
                  <div className='mt-auto p-4'>
                    <h3>Jasmine</h3>
                    <h6 className='fw-normal fst-italic text-primary mb-4'>Stomach Specialists</h6>
                    <p className='m-0'>Consider the gastroenterologist's experience, particularly with the specific condition you are dealing with. Check with your health insurance provider for a list of covered gastroenterologists in your area.</p>
                  </div>
                  <div className='d-flex mt-auto p-4'>
                    <span className='btn btn-lg btn-primary btn-lg-square rounded-circle me-3'><FaFacebookF className='fab fa-facebook-f'/></span>
                    <span className='btn btn-lg btn-primary btn-lg-square rounded-circle me-3'><FaTwitter className='fab fa-twitter'/></span>
                    <span className='btn btn-lg btn-primary btn-lg-square rounded-circle'><FaLinkedinIn className='fab fa-linked-in'/></span>
                  </div>
                </div>
              </div>
            </div>
            <div className='team-item border-top'>
              <div className='row g-0 bg-light rounded overflow-hidden'>
                <div className='col-12 col-sm-5 h-100'>
                  <img className='img-fluid h-100'src={img3} alt='img' style={{objectFit:'cover'}}/>
                </div>
                <div className='col-12 col-sm-7 h-100 d-flex flex-column'>
                  <div className='mt-auto p-4'>
                    <h3>David</h3>
                    <h6 className='fw-normal fst-italic text-primary mb-4'>Leg Specialists</h6>
                    <p className='m-0'>They specialize in the diagnosis and surgical treatment of musculoskeletal issues, including bones, joints, ligaments, tendons, and muscles. Specialize in the treatment of the feet and lower legs.</p>
                  </div>
                  <div className='d-flex mt-auto p-4'>
                    <span className='btn btn-lg btn-primary btn-lg-square rounded-circle me-3'><FaFacebookF className='fab fa-facebook-f'/></span>
                    <span className='btn btn-lg btn-primary btn-lg-square rounded-circle me-3'><FaTwitter className='fab fa-twitter'/></span>
                    <span className='btn btn-lg btn-primary btn-lg-square rounded-circle'><FaLinkedinIn className='fab fa-linked-in'/></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of professtional doctors section */}

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
                    <p class="mb-0">Designed by <a class="text-primary" href='/'>React</a></p>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Footer End --> */}
    </div>
  )
}
export default Doctors;