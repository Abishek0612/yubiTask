import React, { useState } from "react";
import "./login.css";
import Button from "react-bootstrap/Button";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';


const Login = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();


const handleSubmit = async (event) => {
  event.preventDefault();
  
  fetch('http://localhost:5000/users/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name })
  })
  navigate('/otp')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to create data');
      }
    })
    .catch(error => {
      console.error(error);
    });
}
  

return (
    <div className="container">
      <h1>Get started</h1>
      <div className="content-top">
        <form >

        <TextField  type="number" className=" spin-button-none" placeholder="Mobile number"  id="name"  name='name'  onChange={event => setName(event.target.value)} />
        <div className="continue">

        <Button variant="info" onClick={handleSubmit}>Continue</Button>{" "}
        </div>
        </form>
      </div>

      <div className="content-bottom">
        <p style={{ color: "grey" }}> or continue with</p>

        <div className="button">
          <div>
            <button className="whatsapp-icon">
              {" "}
              <span style={{ color: "green" }}>
                <WhatsAppIcon /> WhatsApp
              </span>
            </button>
          </div>

          <div>
            <button className="google-icon">
              {" "}
              <span style={{ color: "blue" }}>
                <GoogleIcon />
                Google
              </span>
            </button>
          </div>
        </div>

        <p>
          By continue, you agree to our{" "}
          <span style={{ color: "blue" }}>terms</span> and
          <span style={{ color: "blue" }}> policies</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
