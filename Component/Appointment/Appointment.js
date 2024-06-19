import React, { useState } from 'react';
import axios  from 'axios';

const Appointment = () => {
    const [department, setDepartment] = useState('');
    const [age, setAge] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const bookAppointment = () => {
        axios.post('http://localhost:3000/appointment', {
            Department: department,
            Age: age,
            Name: name,
            Email: email,
            Date: date,
            Time: time
        }).then((response) => {
            console.log(response.data); // Log the response from the server
            alert('Your appointment was booked successfully');
        }).catch((error) => {
            console.error('Error booking appointment:', error);
            alert('Failed to book appointment');
        });
    }
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
              <button className='btn btn-outline-primary rounded-pill my-2 my-sm-0' style={{fontSize:'1rem'}}>Appointment</button>
            </div>
          </nav>
        </div>
      </div>
      {/* end navbar section */}

      {/* appointment section */}
      <div className="container-fluid bg-primary py-4">
        <div className="container py-5">
            <div className="row gx-5">
                <div className="col-lg-6 mb-5 mb-lg-0">
                    <div className="mb-4">
                        <h5 className="d-inline-block text-white text-uppercase border-bottom border-5">Appointment</h5>
                        <h1 className="display-4">Make An Appointment For Your Kids</h1>
                    </div>
                    <p className="text-white mb-5">The process begins when a patient schedules an appointment, either through a medical office answering service or in person. The receptionist provides information about the appointment and what to expect. After completing the forms, the patient waits to be called in for their appointment. Patients can book appointments online through the website-based platforms.</p>
                    <span className="btn btn-dark rounded-pill py-3 px-5 me-3" href="">Find Doctor</span>
                    <span className="btn btn-outline-dark rounded-pill py-3 px-5" href="">Read More</span>
                </div>
                <div className="col-lg-6">
                    <div className="bg-white text-center rounded p-5">
                        <h1 className="mb-4">Book An Appointment</h1>
                        <form>
                            <div className="row g-3">
                                <div className="col-12 col-sm-6">
                                    <select className="form-select bg-light border-0" type='text' style={{height:'55px'}} onChange={(event)=>{
                                        setDepartment(event.target.value)
                                    }}>
                                        <option selected>Choose Department</option>
                                        <option value="Fever & Cold">Feve & cold</option>
                                        <option value="Stomach Pain">Stomach Pain</option>
                                        <option value="Leg Pain">Leg Pain</option>
                                    </select>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <select className="form-select bg-light border-0" style={{height:'55px'}} onChange={(event)=>{
                                        setAge(event.target.value)
                                    }}>
                                        <option selected>Select Age</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input type="text" className="form-control bg-light border-0" placeholder="Your Name" style={{height:'55px'}} onChange={(event)=>{
                                        setName(event.target.value)
                                    }}/>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input type="email" class="form-control bg-light border-0" placeholder="Your Email" style={{height:'55px'}} onChange={(event)=>{
                                        setEmail(event.target.value)
                                    }}/>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="date" id="date" data-target-input="nearest">
                                        <input type="date"
                                            className="form-control bg-light border-0 datetimepicker-input"
                                            placeholder="Date" data-target="#date" data-toggle="datetimepicker" style={{height:'55px'}} onChange={(event)=>{
                                                setDate(event.target.value)
                                            }}/>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="time" id="time" data-target-input="nearest">
                                        <input type="time"
                                            className="form-control bg-light border-0 datetimepicker-input"
                                            placeholder="Time" data-target="#time" data-toggle="datetimepicker" style={{height:'55px'}} onChange={(event)=>{
                                                setTime(event.target.value)
                                            }}/>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit" onClick={bookAppointment}>Make An Appointment</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
      {/* end of appointment section */}
    </div>
  )
}
export default Appointment;