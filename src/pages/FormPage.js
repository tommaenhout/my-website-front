import Logo from "../images/Logo.png";
import ".//Login.css";
import { Image } from "react-bootstrap";
import useInput from "../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");
//control shift f to format code
//https://www.youtube.com/watch?v=NgWGllOjkbs
function FormPage() {
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail
  } =useInput(isEmail);
  const {
    value: nativeLanguageValue,
    isValid: nativeLanguageIsValid,
    hasError: nativeLanguageHasError,
    valueChangeHandler: nativeLanguageChangeHandler,
    inputBlurHandler: nativeLanguageBlurHandler,
    reset: resetnativeLanguage
  } =useInput(isNotEmpty);
  const {
    value: countryValue,
    isValid: countryIsValid,
    hasError: countryHasError,
    valueChangeHandler: countryChangeHandler,
    inputBlurHandler: countryBlurHandler,
    reset: resetcountry
  } =useInput(isNotEmpty);

  let formIsValid = false;

  if (nameIsValid && emailIsValid && nativeLanguageIsValid && countryIsValid) {
    formIsValid = true;
  }

  const submitHandler = event => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log('Submitted!');
    console.log(nameIsValid, emailIsValid, nativeLanguageIsValid, countryIsValid);

    resetName();
    resetEmail();
    resetnativeLanguage();
    resetcountry();
  };

  const nameClasses =  nameHasError ? 'form-group mt-3 invalid' : 'form-group mt-3';
  const emailClasses = emailHasError ? 'form-group mt-1 invalid' : 'form-group mt-1';
  const nativeLanguageClasses = nativeLanguageHasError ? 'form-group mt-1 invalid' : 'form-group mt-1';
  const countryClasses = countryHasError ? 'form-group mt-1 invalid' : 'form-group mt-1';

  return (
    <div className="Auth-form-container bg-light">
      <form className="Auth-form" onSubmit={submitHandler}>
        <div className="Auth-form-content text-center">
          <Image
            className="img-fluid"
            src={Logo}
            height="100"
            width="100"
          ></Image>
          <h3 className="Auth-form-title display-4 text-center">Reservation</h3>
          <div className={nameClasses}>
            <label className="lead text-black"></label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter name"
              value={nameValue}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            />
           {nameHasError && <p className="error-text">Please enter a name.</p>}
          </div>

          <div className={emailClasses}>
            <label className="lead text-black"></label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
          {emailHasError && <p className="error-text">Please enter a valid email.</p>}
          </div>
          <div className={nativeLanguageClasses}>
            <label className="lead text-black"></label>
            <input
              className="form-control mt-1"
              placeholder="Enter native language"
              value={nativeLanguageValue}
              onChange={nativeLanguageChangeHandler}
              onBlur={nativeLanguageBlurHandler}
            />
          {nativeLanguageHasError && <p className="error-text">Please enter your native language.</p>}
          </div>
          <div className={countryClasses}>
            <label className="lead text-black"></label>
            <input
              className="form-control mt-1"
              placeholder="Enter country"
              value={countryValue}
              onChange={countryChangeHandler}
              onBlur={countryBlurHandler}
            />
          {countryHasError && <p className="error-text">Please enter your country.</p>}
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
