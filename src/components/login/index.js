import React, {useState} from 'react';
import {Base_url_developpement as devURL} from '../../config/config';
import axios from "axios";
const Login = (props) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isAutheticated, setAutheticated] = useState(false);
    const handleName = (e) => {
      setName(e.target.value)
    }
    const handlePassword = (e) => {
      setPassword(e.target.value)
    }

  function login(e) {
    e.preventDefault();
    let item = {name,password};
    axios.post(devURL+'user/login',item)
        .then(user => {
          console.log(user.data.user);
          let access_token = user.data.user.access_token;
          localStorage.setItem('access_token',access_token);
          let users = JSON.stringify(user.data.user);
          localStorage.setItem('user',users);
          props.history.push('/welcome');
          setAutheticated(true);
        })
        .catch(error => {
          console.log(error);
    })
  }

    return (
         <div className="login-page">
           <div className="login-box">
             <div className="login-logo">
               <a href="../../index2.html"><b>Gestion</b> LTE Paris</a>
             </div>
             <div className="card">
               <div className="card-body login-card-body">
                 <p className="login-box-msg">connectez-vous</p>

                 <form onSubmit={login}>
                   <div className="input-group mb-3">
                     <input onChange={handleName}  type="text" value={name} className="form-control" placeholder="Email  or Username" />
                     <div className="input-group-append">
                       <div className="input-group-text">
                         <span className="fas fa-user"></span>
                       </div>
                     </div>
                   </div>
                   <div className="input-group mb-3">
                     <input onChange={handlePassword} value={password} type="password" className="form-control" placeholder="Password" />
                     <div className="input-group-append">
                       <div className="input-group-text">
                         <span className="fas fa-lock"></span>
                       </div>
                     </div>
                   </div>
                   <div className="row">
                     <div className="col-12">
                       <button type="submit" className="btn btn-primary btn-block">Se Connecter</button>
                     </div>
                   </div>
                 </form>

                 <div className="social-auth-links text-center mb-3">
                   <p>- OR -</p>
                   <a href="#" className="btn btn-block btn-primary">
                     <i className="fab fa-facebook mr-2"></i> Se Connecter avec Facebook
                   </a>
                   <a href="#" className="btn btn-block btn-danger">
                     <i className="fab fa-google-plus mr-2"></i> Se Connecter avec Google+
                   </a>
                 </div>
                 <p className="mb-1">
                   <a href="forgot-password.html">I forgot my password</a>
                 </p>
                 <p className="mb-0">
                   <a href="register.html" className="text-center">Register a new membership</a>
                 </p>
               </div>
             </div>
           </div>
         </div>
    );
}



export default Login;
