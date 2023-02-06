import React,{useEffect} from "react";
import "./index.css"
/*import axios from 'axios'*/




//let urlApi = "https://enigmatic-island-27450.herokuapp.com/auth/login";

export default function Navbar() {

 /*const navigate = useNavigate();

  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState(false);
  const axiosJWT = axios.create()*/

  
  
  return (
    <nav className='navbar navbar-dark bg-dark'>
    <div className='container'>
      <div className="row">
      <a className='navbar-brand text' href="/">inicio</a>
      <p>about us</p>
      <p>Programas</p>
      <p>Beneficios</p>
      </div>
      
    </div>
   </nav>
  );
}
