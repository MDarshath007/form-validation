import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";

function SignupSection() {

  const [errors, setErrors] = useState({})

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false
  });

   const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  console.log(formData);

  const handleSubmit = (e) => {
    
    e.preventDefault();

    const newErrors = {}

    console.log("button clicked");

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required."
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Enter a valid email address."
    }

    if (formData.password.length < 8) {
      newErrors.password = "Password must be atleast 8 characters."
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match."
    }

    if (!formData.termsAccepted) {
      newErrors.termsAccepted = "You must accept the Terms and Conditions."
    }

    setErrors(newErrors)

    if(Object.keys(newErrors).length===0) {
    console.log("Login Success")
    }

  };

  return (
    <form className="signup-section p-5" onSubmit={handleSubmit}>
      <hr />
      <h1 className="mb-2 p-0 text-center text-primary phone-view-header">
        <span className="p-0 bi bi-shield-shaded text">
          {" "}
          <span className="text-dark p-0">Form</span>
        </span>
        Validate
      </h1>
      <hr />
      <h1>Sign Up</h1>
      
      <p className="my-3">
        Kindly fill in the details below to create your account
      </p>

      <br />

      <div className="main-input-field">
        <div className=" input">
          <h6>Full Name</h6>
          <input
            type="text"
            className="username"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          <p 
            className="text-danger 
            mt-1 
            name-error">{errors.fullName}</p>
        </div>

        <div className=" input">
          <h6>Email Address</h6>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <p className="text-danger 
            mt-1 
            input" 
            id="email-error">
            {errors.email}
          </p>
        </div>

        <div className="input">
          <h6>Password</h6>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <p 
            className="text-danger 
            mt-1 input" 
            id="weak-password">
            {errors.password}
          </p>
        </div>

        <div className="input">
          <h6>Confirm Password</h6>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <p className="text-danger mt-1" id="passwords-no-match">
            {errors.confirmPassword}
          </p>
        </div>

        <div className="term-conditions">
          <input 
            className="check-box m-0 p-0"
            name="termsAccepted" 
            type="checkbox"  
            onChange={handleChange}/> I agree to the{" "}
          <a href="">Terms & Conditions</a> and <a href="">Privacy Policy</a>
          <p 
            className="text-danger 
            mt-1" 
            id="passwords-no-match">
            {errors.termsAccepted}
          </p>
        </div>

        <button 
          className="btn btn-primary 
          w-100 
          create-ac-btn" 
          type="submit">
          Create Account
        </button>

        <h6 className="text-center">OR</h6>

        {/* <div 
          className="btn btn-light 
          border w-100 
          create-ac-btn 
          d-flex 
          align-items-center 
          gap-3 
          justify-content-center">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg" />{" "}
          Sign in with Google
        </div> */}
       
       <GoogleLogin 
         onSuccess={(credentialResponse)=>{
          console.log(credentialResponse)
         }}
         onError={()=> console.log("Login Failed")}/>

      </div>

    </form>
  );
}

export default SignupSection;
