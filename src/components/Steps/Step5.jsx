import React from "react";

const Step5 = () => {
  return (
    <div>
      <div className="container">
        <form className="table" action="">
          <div className="content">
            <h1>User Registration Wizard - Step 5</h1>

            <h3>Step 5 - Consent to personal Data processing</h3>

            <label htmlFor="agreeLogin">
              Login:
              <input type="text" id="agreeLogin" />
            </label>
            <label htmlFor="agreePassword">
              Password:
              <input type="password" id="agreePassword" />
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

          {/* <div className="buttons">
            <button>Previous</button>
            <button>Next</button>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default Step5;
