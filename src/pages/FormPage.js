import Logo from '../images/Logo.png';
import ".//Login.css"
import {Image} from 'react-bootstrap';


function FormPage() {
  return (
    <div className="Auth-form-container bg-light">
    <form className="Auth-form">
      <div className="Auth-form-content text-center">
      <Image className="img-fluid" src={Logo} height="100" width="100"></Image>
        <h3 className="Auth-form-title display-4 text-center">Reservation</h3>
        <div className="form-group mt-3">
          <label className="lead text-black" ></label>
          <input
            type= "text"
            className="form-control mt-1"
            placeholder="Enter name"
          />
        </div>
        <div className="form-group mt-1">
          <label className="lead text-black"></label>
          <input
            type="email"
            className="form-control mt-1"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group mt-1">
          <label className="lead text-black"></label>
          <input
            className="form-control mt-1"
            placeholder="Enter native language"
          />
          </div>
           <div className="form-group mt-1">
          <label className="lead text-black"></label>
          <input
            className="form-control mt-1"
            placeholder="Enter country"
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

export default FormPage;