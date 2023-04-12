import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Loginpage/Login';
import OTPForm from './components/Otppage/OtpVerification';
import GetData from './components/Loginpage/GetData';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/otp' element={<OTPForm />} />
          <Route exact path='/get' element={<GetData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
