import React from "react";

const Step3 = () => {
  return (
    <div>
      <div className="container">
        <form className="table" action="">
          <div className="content">
            <h1>User Registration Wizard - Step 3</h1>

            <label htmlFor="name">
              First Name:
              <input type="text" id="name" />
            </label>

            <label htmlFor="nameS">
              Last Name:
              <input type="text" id="name" />
            </label>

            <label htmlFor="middleName">
              Middle Name:
              <input type="text" id="name" />
            </label>

            <label htmlFor="date">
              Birthdate:
              <input type="date" id="date" />
            </label>

            <label htmlFor="email">
              Email:
              <input type="email" id="email" />
            </label>

            <label className="gender" htmlFor="gender">
              Gender:
              <select className="genderSelect" id="gender">
                <option value="">Select</option>
                <option value="">Male</option>
                <option value="">Female</option>
              </select>
            </label>

            <label className="year" htmlFor="checked">
              <h1>Are you older than 18?</h1>
              <input type="checkbox" name="18years" id="checked" />
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

export default Step3;
