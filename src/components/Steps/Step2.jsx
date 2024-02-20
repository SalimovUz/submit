import React from "react";
import "../../App.css";

const Step2 = () => {
  return (
    <div>
      <div className="container">
        <form className="table" action="">
          <div className="content">
            <h1>User Registration Wizard - Step 2</h1>

            <label className="type" htmlFor="type">
              Subscription Type:
              <select className="types" id="type">
                <option value="">Choose an option</option>
                <option value="">Free</option>
                <option value="">Monthly</option>
                <option value="">Yearly</option>
              </select>
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

export default Step2;
