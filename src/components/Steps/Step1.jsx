import React, { useState } from "react";
import "../../App.css";

const Step1 = () => {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    subscriptionType: "",
    paymentMethod: "",
    middlename: "",
    birthdate: "",
    gender: "",
  });
  const increment = (e) => {
    setStep((prev) => prev + 1);
    e.preventDefault();
  };

  const decrement = (e) => {
    setStep((prev) => prev - 1);
    e.preventDefault();
  };

  const submit = (e) => {
    e.preventDefault();
    const submit = document.getElementById("submit");
    const body = document.querySelector(".container");
    const back = document.getElementById("back");
    const close = document.getElementById("close");

    submit.style.display = "block";
    body.style.opacity = "0.3";

    back.addEventListener("click", (e) => {
      e.preventDefault();
      submit.style.display = "none";
      body.style.opacity = "1";
    });

    close.addEventListener("click", (e) => {
      e.preventDefault();
      submit.style.display = "none";
      body.style.opacity = "1";
      setStep(1);
    });
  };

  return (
    <div>
      <div className="container">
        <form className="table" action="">
          {step === 1 && (
            <div className="content">
              <h1>User Registration Wizard - Step {step}</h1>

              <label htmlFor="login">
                Login:
                <input
                  value={userData.username}
                  onChange={(e) =>
                    setUserData({ ...userData, username: e.target.value })
                  }
                  id="login"
                  type="text"
                  placeholder="Enter Login"
                />
              </label>

              <label htmlFor="pass">
                Password:
                <input
                  id="pass"
                  value={userData.password}
                  type="password"
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
                  placeholder="Enter Password"
                />
              </label>

              <label htmlFor="passConfirm">
                Confirm Password:
                <input
                  id="passConfirm"
                  value={userData.confirmPassword}
                  type="password"
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      confirmPassword: e.target.value,
                    })
                  }
                  placeholder="Enter Password"
                />
              </label>
            </div>
          )}

          {step === 2 && (
            <div className="content">
              <h1>User Registration Wizard - Step {step}</h1>

              <label className="type" htmlFor="type">
                Subscription Type:
                <select
                  value={userData.subscriptionType}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      subscriptionType: e.target.value,
                    })
                  }
                  className="types"
                  id="type"
                >
                  <option>Choose an option</option>
                  <option>Free</option>
                  <option>Monthly</option>
                  <option>Yearly</option>
                </select>
              </label>
            </div>
          )}

          {step === 3 && (
            <div className="content">
              <h1>User Registration Wizard - Step {step}</h1>

              <label htmlFor="name">
                First Name:
                <input
                  value={userData.firstName}
                  onChange={(e) =>
                    setUserData({ ...userData, firstName: e.target.value })
                  }
                  type="text"
                  id="name"
                />
              </label>

              <label htmlFor="nameS">
                Last Name:
                <input
                  value={userData.lastName}
                  onChange={(e) =>
                    setUserData({ ...userData, lastName: e.target.value })
                  }
                  type="text"
                  id="nameS"
                />
              </label>

              <label htmlFor="middleName">
                Middle Name:
                <input
                  value={userData.middlename}
                  onChange={(e) =>
                    setUserData({ ...userData, middlename: e.target.value })
                  }
                  type="text"
                  id="name"
                />
              </label>

              <label htmlFor="date">
                Birthdate:
                <input
                  value={userData.birthdate}
                  onChange={(e) =>
                    setUserData({ ...userData, birthdate: e.target.value })
                  }
                  type="date"
                  id="date"
                />
              </label>

              <label htmlFor="email">
                Email:
                <input
                  value={userData.email}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                  type="email"
                  id="email"
                />
              </label>

              <label className="gender" htmlFor="gender">
                Gender:
                <select
                  className="genderSelect"
                  id="gender"
                  value={userData.gender}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      gender: e.target.value,
                    })
                  }
                >
                  <option>Select</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </label>

              <label className="year" htmlFor="checked">
                <h1>Are you older than 18?</h1>
                <input type="checkbox" name="18years" id="checked" />
              </label>
            </div>
          )}

          {step === 4 && (
            <div className="content">
              <h1>User Registration Wizard - Step {step}</h1>

              <label htmlFor="card">
                Card Number:
                <input
                  value={userData.paymentMethod}
                  onChange={(e) =>
                    setUserData({ ...userData, paymentMethod: e.target.value })
                  }
                  type="number"
                  id="card"
                />
              </label>
            </div>
          )}

          {step === 5 && (
            <div className="content">
              <h1>User Registration Wizard - Step {step}</h1>

              <h3>Step 5 - Consent to personal Data processing</h3>

              <label htmlFor="agreeLogin">
                Login:
                <input
                  value={userData.username}
                  onChange={(e) =>
                    setUserData({ ...userData, username: e.target.value })
                  }
                  type="text"
                  id="agreeLogin"
                />
              </label>
              <label htmlFor="agreePassword">
                Password:
                <input
                  value={userData.password}
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
                  type="password"
                  id="agreePassword"
                />
              </label>

              <div className="agreed">
                <h3 className="agreed__content">
                  Consent to personal Data Processing:
                </h3>
                <label className="agree" htmlFor="agree1">
                  <input type="checkbox" id="agree1" />
                  <p>
                    I consent to personal data proceesingSite UsesCookie
                    Agreement:
                  </p>
                </label>

                <label className="agree" htmlFor="agree2">
                  <input type="checkbox" id="agree2" />
                  <p>I agree to the site's use of cookies:</p>
                </label>
              </div>
            </div>
          )}

          {step === 6 && (
            <div id="sub" className="content">
              <div className="dates">
                <h1>User Registration Wizard - Step {step}</h1>
                <h2>Review your information</h2>
                <h3>Login: {userData.username}</h3>
                <h3>Password: {userData.password}</h3>
                <h3>Confirm Password: {userData.confirmPassword}</h3>
                <h3>Subscription Type: {userData.subscriptionType}</h3>
                <h3>First Name: {userData.firstName}</h3>
                <h3>Last Name: {userData.lastName}</h3>
                <h3>Middle Name: {userData.middlename}</h3>
                <h3>Birthdate: {userData.birthdate}</h3>
                <h3>Email: {userData.email}</h3>
                <h3>Gender: {userData.gender}</h3>
                <h3>Payment Method: {userData.paymentMethod}</h3>
              </div>
            </div>
          )}

          <div className="buttons">
            {step !== 1 && (
              <button onClick={decrement} className="btn__pr">
                Previous
              </button>
            )}
            {step !== 6 ? (
              <button onClick={increment}>Next</button>
            ) : (
              <button id="sub" onClick={submit}>
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
      <div id="submit" className="submit">
        <h1>Congratulations</h1>

        <h3>Your Data has been saved succesfully</h3>

        <div className="btns">
          <button id="back">Back</button>
          <button id="close">Close</button>
        </div>
      </div>
    </div>
  );
};

export default Step1;
