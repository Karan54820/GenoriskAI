import React, { useState } from "react";
import NavBar from "../compenents/NavBar";
import MailIcon from "../assets/mail.png";
import MobileIcon from "../assets/phone.png";
import LocationIcon from "../assets/location.png";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "../index.css";
import { Footer } from "../compenents/Footer";

const Contact = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail]= useState("")
  const [subject, setSubject] = useState("");
  const [message, setMessage] =useState("")
  const [phoneNo, setPhoneNo] = useState("")

  const submitHandler = async () => {
    // event.preventDefault();
    const base = window.location.origin;

    let dataMail = {
      name:name,
      email:email,
      subject:subject,
      phoneNo:phoneNo,
      message:message,
    };

    const res = await fetch(`${base}/contact`, {
      method: "POST",
      body: JSON.stringify(dataMail),
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      }
    })
    .then((res) => {
      console.log(res)
      if(res.status > 199 && res.status < 300){
        alert("Send Successfully");
      }
    })
    
  };
  

  const backButtonHandler = () => {
    navigate(-1);
  };

  return (
    <div>
      <NavBar />
      <div className="w-11/12 max-w-[1160px] mx-auto bg-richblack-900 min-h-screen">

        <div className="flex max-w-[1160px] justify-start pt-10 pl-5 sticky top-11">
          <button
            onClick={backButtonHandler}
            className="bg-richblack-800 text-richblack-100 py-2 rounded-md border border-richblack-700 px-6"
          >
            Back
          </button>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center w-full mt-10">
          <div className="bg-richblack-800 flex flex-col sm:flex-row w-11/12 max-w-[1160px] p-8 gap-10">

            {/* Left Side - Form */}
            <div className="flex flex-col gap-6 w-full sm:w-[60%]">
              <h2 className="text-2xl font-bold text-center text-richblack-5">
                Send us a message
              </h2>

              <form className="space-y-6" onSubmit={submitHandler}>
                <div className="grid sm:grid-cols-2 gap-6 text-richblack-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-md font-medium">
                      Name<sup className="text-pink-500">*</sup>
                    </label>
                    <input
                      className="input-feild"
                      id="name"
                      placeholder="Enter your name"
                      type="text"
                      name="name"
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-md font-medium">
                      Email<sup className="text-pink-500">*</sup>
                    </label>
                    <input
                      className="input-feild"
                      id="email"
                      placeholder="Enter your email"
                      type="email"
                      name="email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="PhoneNo" className="text-md font-medium">
                      Phone Number<sup className="text-pink-500">*</sup>
                    </label>
                    <input
                      className="input-feild"
                      id="PhoneNo"
                      placeholder="Enter your phone number"
                      type="text"
                      name="PhoneNo"
                      required
                      onChange={(e)=> setPhoneNo(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-md font-medium">
                      Subject<sup className="text-pink-500">*</sup>
                    </label>
                    <input
                      className="input-feild"
                      id="subject"
                      placeholder="Enter the subject"
                      type="text"
                      name="subject"
                      required
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-1 gap-2 text-richblack-5">
                  <label htmlFor="message" className="text-md font-medium text-white">
                    Message<sup className="text-pink-500">*</sup>
                  </label>
                  <textarea
                    className="input-feild input-feild-extra"
                    id="message"
                    type="text"
                    placeholder="Enter your message"
                    name="message"
                    required
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="btn btn-primary w-full"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

            {/* Right Side - Contact Info */}
            <div className="bg-[#333f90] text-white w-full sm:w-[40%] p-8 flex flex-col gap-8">
              <h2 className="text-3xl text-center">Contact Information</h2>

              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <img src={LocationIcon} width={22} height={20} alt="Location" />
                  <p>IIITD, New Delhi, India</p>
                </li>
                <li className="flex items-center gap-2">
                  <img src={MobileIcon} width={20} height={20} alt="Phone" />
                  <p>800-900-5423</p>
                </li>
                <li className="flex items-center gap-2">
                  <img src={MailIcon} width={18} height={20} alt="Email" />
                  <p>info@genoriskAI.com</p>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>

  );
};

export default Contact;


