import Button from "react-bootstrap/Button";
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';

const DEFAULT_OTP = '9999';

function OTPForm() {

  const [otpValue, setOTPValue] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    if (otpValue === DEFAULT_OTP) {
      // Redirect the user to the home page
      navigate('/get')
    } else {
      
    }
  };

  const handleChange = (event) => {
    setOTPValue(event.target.value);
  };

  return (
    <div className='container'>

    <form onSubmit={handleSubmit}>
          <h3 style={{paddingRight:'60px'}}>Enter OTP</h3>
        <p style={{color:'green', paddingRight:'50px'}}>We  have sent a one time <br></br> password OTP to *****2163</p>

        <TextField placeholder="Enter your OTP" type="text" value={otpValue} onChange={handleChange} />
        <div className="continue">

      <Button  variant="info"  type="submit">Submit</Button>
        </div>
        <p style={{color:'lightblue', paddingRight:'50px'}}>Resend OTP in 00:15</p>
    </form>
    </div>
  );
}

export default OTPForm;
