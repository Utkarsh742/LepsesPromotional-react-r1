import React from 'react'
import { useState } from 'react';
import './Contact.css'
import {FaFacebookF} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaDribbble} from "react-icons/fa";
import {FaCaretDown} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";


const Contact = () => {

  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("Who Are You?");
  const [user, setUser] = useState(
    {
      name: "",
      email: "",
      user: "",
    }
  );
  
  console.log(user);
  let name,value;
  const getUserData = (e) => {
     name = e.target.name;
      value = e.target.value;
      setUser({ ...user, [name]: value ,});
  }
  const postData = async (e) => {
    e.preventDefault();
    // const  {name, email, user}=user;
    if(user.name && user.email && user.user)
    {
    const response = await fetch('https://lepses-promotion-backend-default-rtdb.firebaseio.com/users.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          name:user.name,
          email:user.email,
          user:user.user,
      }),
    }
    );
    if(response)
    {
      setUser(  {
        name: "",
        email: "",
        user: "",
      });
      alert("Thank you for your interest. We will get back to you soon!");
    }
  }
  else
  {
    alert("Please fill all the fields");
  }
    console.log(user); 
  };
  const options=['School Student','College Student','Educator'];
  return (
    <footer id="Launch"  data-aos="fade-up">
    <div className="container">
      <div className="footer-content">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="contact-form">
              <form id="contact" action="/" method="POST">
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <fieldset>
                      <input
                        name="name"
                        type="text"
                        id="name"
                        value={user.name}
                        onChange={getUserData}
                        placeholder="Full Name"
                        required=""
                        style={{backgroundColor:'rgba(250, 250, 250, 0.3)'}}
                      />
                    </fieldset>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <fieldset>
                      <input
                        name="email"
                        type="text"
                        id="email"
                        value={user.email}
                        onChange={getUserData}
                        placeholder="E-Mail Address"
                        required=""
                        style={{backgroundColor:'rgba(250, 250, 250, 0.3)'}}
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      {/* <label htmlFor="dropdown" className='label'>Who Are You?</label> */}
                    <div className="dropdown">
                      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
                     {selected}
                        <span><FaCaretDown/></span>
                      </div>
                      {isActive && (
                      <div className="dropdown-content">
                      {
                        options.map((option)=>(
                          <div  onClick={(e)=>{
                            setSelected(option)
                            setIsActive(false)
                            user.user=option;
                          }} className="dropdown-item">
                         {option}
                        </div>
                        ))}
                      </div>
                      )}
                    </div>
                    
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <button
                        type="submit"
                        id="form-submit"
                        className="main-button"
                        onClick={postData}
                      >
                        Notify Me Launch
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="right-content col-lg-6 col-md-12 col-sm-12">
            <h2>Get Notified for <em>Launch</em></h2>
            <p>
              We know we are biased, but we have been facing this problem for a long time. This product is revolutionary and will change the way you do things.
              <br /><br />Be the first, to witness the revolution on a regular basis. And Guess what? It's FREEEEE.
              
            
            </p>
            <ul className="social">
              <li>
                <a href="https://facebook.com"
                  ><FaFacebookF/></a>
              </li>
              <li>
                <a href="#"><FaTwitter/></a>
              </li>
              <li>
                <a href="#"><FaLinkedinIn/></a>
              </li>
              <li>
                <a href="#"><i className="fa fa-rss"></i></a>
              </li>
              <li>
                <a href="#"><FaDribbble/></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="sub-footer">
            <p>
              Copyright &copy; 2022 Lepses Inc.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>

  )
}

export default Contact