import "./Login.css"
import apiConnection from './api/apiConnection'
import {Image} from 'react-bootstrap'
import Logo from '../images/Logo.png'
import { useRef } from 'react'


function LoginPage () {
  const usernameInputRef = useRef();
  const enteredPasswordRef = useRef();

  async function submitHandler(event) {
    event.preventDefault();

    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = enteredPasswordRef.current.value;

    // validation
    console.log(enteredUsername, enteredPassword);

    apiConnection.post('/login', {"email": enteredUsername, "password": enteredPassword})
    .then(function(response) {
      alert("Welcome " + response.data.user.email);
    })
    .catch(function(error) {
      const errorMessage = error.response.data;
      alert(errorMessage)
    });
    /* let url = "http://localhost:4000/"
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredUsername,
        password: enteredPassword
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'no-cors'
    }).then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = 'Authentication failed!';
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        alert(err.message);
      });
     */
  }

  return (
    <div className="Auth-form-container bg-light">
      <form className="Auth-form" onSubmit={submitHandler}>
        <div className="Auth-form-content text-center">
        <Image className="img-fluid" src={Logo} height="100px"></Image>
          <h3 className="Auth-form-title display-4 text-center">Sign In</h3>
          <div className="form-group mt-3">
            <label className="lead text-black" >Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email "
              ref={usernameInputRef}
            />
          </div>
          <div className="form-group mt-3">
            <label className="lead text-black">Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              ref={enteredPasswordRef}
            />
          </div>
          <div className="d-grid gap-2 mt-5">
            <button type="submit" className="btn btn-primary btn-lg">
              <span className="lead text-white">Submit</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;