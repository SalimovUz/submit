import React from "react";

const Step4 = () => {
  return (
    <div>
      <div className="container">
        <form className="table" action="">
          <div className="content">
            <h1>User Registration Wizard - Step 4</h1>

            <label htmlFor="card">
              Card Number:
              <input type="number" id="card" />
            </label>
          </div>

          {/* <div className="buttons">
            <button className="back" type="button">
              Previous
            </button>
            <button className="next" type="button">
              Next
            </button>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default Step4;
