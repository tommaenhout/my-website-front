import "./Login.css"
import {Image} from 'react-bootstrap'
import Logo from '../images/Logo.png'

function LoginPage () {
  return (
    <div className="Auth-form-container bg-light">
      <form className="Auth-form">
        <div className="Auth-form-content text-center">
        <Image className="img-fluid" src={Logo} height="100px"></Image>
          <h3 className="Auth-form-title display-4 text-center">Sign In</h3>
          <div className="form-group mt-3">
            <label className="lead text-black" >Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label className="lead text-black">Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
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